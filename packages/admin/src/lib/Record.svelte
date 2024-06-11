<script>
	import { onMount, onDestroy } from 'svelte';
    import { changes } from './stores/changes';
    import { collectionId, recordId } from './stores/location';
    import { Editor } from '@tiptap/core';
    // import StarterKit from '@tiptap/starter-kit';
    import Document from '@tiptap/extension-document';
    import Paragraph from '@tiptap/extension-paragraph';
    import Text from '@tiptap/extension-text';
    import Heading from '@tiptap/extension-heading';
    import ListItem from '@tiptap/extension-list-item';
    import BulletList from '@tiptap/extension-bullet-list';
    import OrderedList from '@tiptap/extension-ordered-list';
    import Link from '@tiptap/extension-link';
    import Image from '@tiptap/extension-image';
    import Bold from '@tiptap/extension-bold';
    import Italic from '@tiptap/extension-italic';
    import Underline from '@tiptap/extension-underline';
    import History from '@tiptap/extension-history';
    import TextAlign from '@tiptap/extension-text-align';
    
    
    /** @type {any} */
    export let record;

    /** @type {any} */
    export let config;

    let richEditors = {};
    let richElements = {};
    let richLinkWidgets = {};
    let richLinkTexts = {};

    function changeEditorText(name, value) {
        switch(value) {
            case 'paragraph':
                richEditors[name].chain().focus().setParagraph().run();
                break;
            case 'h1':
                richEditors[name].chain().focus().toggleHeading({ level: 1 }).run();
                break;
            case 'h2':
                richEditors[name].chain().focus().toggleHeading({ level: 2 }).run();
                break;
            case 'h3':
                richEditors[name].chain().focus().toggleHeading({ level: 3 }).run();
                break;
            case 'h4':
                richEditors[name].chain().focus().toggleHeading({ level: 4 }).run();
                break;
            case 'h5':
                richEditors[name].chain().focus().toggleHeading({ level: 5 }).run();
                break;
            case 'h6':
                richEditors[name].chain().focus().toggleHeading({ level: 6 }).run();
                break;
            case 'blockquote':
                richEditors[name].chain().focus().toggleBlockquote().run();
                break;
        }
    }

    // Set derived TODO: svelte 5
    $: if (record && config && config.fields) {
        Object.entries(config.fields).map(([name, field]) => {
            if (field.widget === 'derived') {
                let value = record[field.source];
                if (field.mode === 'slug'){
                    value = value.toLowerCase().replace(/\s+/g, '-')
                        .replace(/[^\w\-]+/g, '')
                        .replace(/\-\-+/g, '-')
                        .replace(/^-+/, '')
                        .replace(/-+$/, '');
                }
                record[name] = value;
            }
        });
    }

    function persistLocal() {
        changes.update((changes) => {
            if ($recordId !== undefined) {
                changes[$collectionId] ??= {};
                changes[$collectionId][$recordId] ??= {};
                changes[$collectionId][$recordId] = record;
            } else {
                changes[$collectionId] ??= {};
                changes[$collectionId] = record;
            }
            return changes;
        });
    }

    onMount(() => {
        // Filter fields from config with richtext widget and fill richTextEditors
        if (!config || !config.fields) return;
        Object.entries(config.fields).map(([name, field]) => {
            if (field.widget === 'richtext') {
                richEditors[name] = new Editor({
                    element: richElements[name],
                    extensions: [
                        Document,
                        Paragraph,
                        Text,
                        Heading,
                        ListItem,
                        BulletList,
                        OrderedList,
                        Link.configure({
                            openOnClick: true,
                            HTMLAttributes: {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                            }
                        }),
                        Image.configure({
                            inline: true,
                        }),
                        Bold,
                        Italic,
                        Underline,
                        History,
                        TextAlign.configure({
                            types: ['heading', 'paragraph'],
                        }),
                    ],
                    content: record[name],
                    onUpdate: () => {
                        richEditors[name] = richEditors[name];
                        // Check if the editor is already created
                        if (richEditors[name]) {
                            record[name] = richEditors[name].getHTML();
                            persistLocal();
                        }
                    },
                })
            }
        });
    });
    onDestroy(() => {
        // Destroy all richTextEditors
        Object.values(richEditors).map((editor) => {
            editor.destroy();
        });
    });
</script>

{#if config && record}
    <div class="record-container">
        {#each Object.entries(config.fields) as [name, field]}
            {#if field.hidden}
                <input type="hidden" bind:value="{record[name]}" />
            {:else}
                {#if field.widget === 'string'}
                    <div class="field">
                        <label for="{name}">{name}</label>
                        <input type="text" name="{name}" id={name} bind:value="{record[name]}" on:change={() => persistLocal()} />
                    </div>
                {:else if field.widget === 'text'}
                    <div class="field">
                        <label for="{name}">{name}</label>
                        <textarea name="{name}" id={name} rows="4" bind:value={record[name]} on:change={() => persistLocal()}></textarea>
                    </div>
                {:else if field.widget === 'number'}
                    <div class="field small">
                        <label for="{name}">{name}</label>
                        <input type="number" name="{name}" id={name} bind:value="{record[name]}" on:change={() => persistLocal()} />
                    </div>
                {:else if field.widget === 'richtext'}
                    <!-- <RichEditor name={name} record={record} persistLocal={persistLocal} /> -->
                    <div class="field">
                        <label for="{name}">{name}</label>
                        {#if richEditors[name]}
                            <div class="toolbar">
                                <select value="paragraph" on:change={(e) => changeEditorText(name, e.target.value)}>
                                    <option value="paragraph">Paragraph</option>
                                    <option value="h1">Heading 1</option>
                                    <option value="h2">Heading 2</option>
                                    <!-- <option value="h3">Heading 3</option>
                                    <option value="h4">Heading 4</option>
                                    <option value="h5">Heading 5</option>
                                    <option value="h6">Heading 6</option> -->
                                    <!-- <option value="blockquote">Blockquote</option> -->
                                </select>

                                <div class="separator"></div>

                                <button on:click={() => richEditors[name].chain().focus().setTextAlign('left').run()}><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l10 0" /><path d="M4 18l14 0" /></svg></button>
                                <button on:click={() => richEditors[name].chain().focus().setTextAlign('center').run()}><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M8 12l8 0" /><path d="M6 18l12 0" /></svg></button>
                                <button on:click={() => richEditors[name].chain().focus().setTextAlign('right').run()}><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M10 12l10 0" /><path d="M6 18l14 0" /></svg></button>
                                
                                <div class="separator"></div>

                                <button on:click={() => richEditors[name].chain().focus().toggleBold().run()}><b>B</b></button>
                                <button on:click={() => richEditors[name].chain().focus().toggleItalic().run()}><i>I</i></button>
                                <button on:click={() => richEditors[name].chain().focus().toggleUnderline().run()}><u>U</u></button>
                                <div class="separator"></div>
                                
                                <button on:click={() => richEditors[name].chain().focus().toggleBulletList().run()}><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg></button>
                                <button on:click={() => richEditors[name].chain().focus().toggleOrderedList().run()}><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9" /><path d="M11 12h9" /><path d="M12 18h8" /><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" /><path d="M6 10v-6l-2 2" /></svg></button>
                                
                                <div class="separator"></div>
                                <button
                                    class="link"
                                    on:click={() => {
                                        richLinkWidgets[name] = !richLinkWidgets[name];
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 15l6 -6" />
                                        <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                    </svg>
                                </button>
                                <button class="link">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>
                                </button>
                                {#if richLinkWidgets[name]}
                                    <div class="link-widget">
                                        <input on:mousedown|stopPropagation type="text" bind:value={richLinkTexts[name]} placeholder="Link" />
                                        <button
                                            on:click={() => {
                                                richEditors[name].chain().focus().extendMarkRange('link').setLink({ href: richLinkTexts[name] }).run();
                                            }}>Add</button
                                        >
                                    </div>
                                {/if}
                            </div>
                        {/if}
                        <div on:click={() => richLinkWidgets[name] = false} bind:this={richElements[name]}></div>
                    </div>
                    
                {:else if field.widget === 'checkbox'}
                    <div class="field small">
                        <label for="{name}">{name}</label>
                        <div class="checkbox" on:click|self={() => record[name] = !record[name]} tabindex="-1">
                            <input type="checkbox" name="{name}" id={name} bind:checked="{record[name]}" on:change={() => persistLocal()}/>
                            <label for="{name}">{name}</label>
                        </div>
                    </div>
                {:else if field.widget === 'date'}
                    <div class="field small">
                        <label for="{name}">{name}</label>
                        <input type="date" name="{name}" id={name} bind:value="{record[name]}" on:change={() => persistLocal()}/>
                    </div>
                {:else if field.widget === 'datetime'}
                    <div class="field small">
                        <label for="{name}">{name}</label>
                        <input type="datetime-local" name="{name}" id={name} bind:value="{record[name]}" on:change={() => persistLocal()}/>
                    </div>
                <!-- {:else if field.widget === 'list'}
                    <div class="field">
                        <label for="{name}">{name}</label>
                        <input type="text" name="{name}" id={name} value="{record[name]}" on:change={() => persistLocal()}/>
                    </div> -->
                <!-- {:else if field.widget === 'relation'}
                    <div class="field">
                        <label for="{name}">{name}</label>
                        <input type="text" name="{name}" id={name} value="{record[name]}" on:change={() => persistLocal()}/>
                    </div> -->
                {:else if field.widget === 'select-single'}
                    <div class="field small">
                        <label for="{name}">{name}</label>
                        <select class="single" name="{name}" id={name} bind:value="{record[name]}" on:change={() => persistLocal()}>
                            {#each field.options as option}
                                <option value="{option.value}">{option.label}</option>
                            {/each}
                        </select>
                    </div>
                {:else if field.widget === 'select-multiple'}
                    <div class="field small">
                        <label for="{name}">{name}</label>
                        <!-- <select multiple style="height: {field.options.length * 1.2 + 1}rem" size="{field.options.length}" class="multiple" name="{name}" id={name} bind:value="{record[name]}" on:change={() => persistLocal()}> -->
                            <div class="select-multiple" tabindex="-1">
                                {#each field.options as option}
                                <div>
                                    <input type="checkbox" name="{option.value}" id={option.value} on:change={() => {
                                        if (record[name] === undefined) {
                                            record[name] = [];
                                        }
                                        if (record[name].includes(option.value)) {
                                            record[name] = record[name].filter((item) => item !== option.value);
                                        } else {
                                            record[name] = [...record[name], option.value];
                                        }
                                        persistLocal();
                                    }}/>
                                    <label for="{option.value}">{option.label}</label>
                                </div>
                                    <!-- <option value="{option.value}">{option.label}</option> -->
                                {/each}
                            </div>
                        <!-- </select> -->
                    </div>
                {:else if field.widget === 'derived'}
                    <div class="field">
                        <label for="{name}">{name}</label>
                        <input type="text" name="{name}" id={name} value="{record[name]}" on:change={() => persistLocal()}/>
                    </div>
                {/if}
            {/if}
        {/each}
    </div>
{/if}


<style lang="scss">
.record-container {
    flex: 1 1 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;
}
.field {
    margin: 1rem 0;
    width: 100%;
    &.small {
        width: calc(50% - 1rem);
    }
    label {
        text-transform: capitalize;
        display: block;
        border: 0;
        position: relative;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
    }
    input[type="text"], input[type="date"], input[type="datetime-local"], textarea, .checkbox, select.single, .select-multiple, input[type="number"] {
        display: block;
        position: relative;
        outline: none;
        box-shadow: rgba(225, 228, 232, 0.2) 0px 2px 0px inset;
        box-sizing: border-box;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(207, 217, 224);
        border-radius: 6px;
        color: rgb(65, 77, 99);
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.625rem 0.75rem;
        margin: 0px;
        cursor: auto;
        width: 100%;
        height: 40px;
    }
    input[type="text"]:active, input[type="text"]:focus, input[type="date"]:active, input[type="date"]:focus, textarea:active, textarea:focus, .checkbox:focus-within, .checkbox:focus, .select-multiple:focus-within, .select-multiple:focus, select.single:active, select.multiple:active, select.single:focus, select.multiple:focus, input[type="datetime-local"]:active, input[type="datetime-local"]:focus, input[type="number"]:active, input[type="number"]:focus {
        border-color: rgb(0, 89, 200);
        box-shadow: rgb(152, 203, 255) 0px 0px 0px 3px;
    }
    .checkbox {
        display: flex;
        align-items: center;
        label {
            margin: 0;
            flex-grow: 1;
        }
        input {
            margin-right: 0.5rem;
        }
    }
    .select-multiple {
        display: flex;
        flex-direction: column;
        height: auto;
        label {
            display: inline;
            margin: 0;
            flex-grow: 1;
        }
        > div {
            display: flex;
            align-items: center;
            margin: 0.25rem 0;
            input {
                margin-right: 0.5rem;
            }
        }
        
    }
    textarea {
        resize: vertical;
    }
    select.single {
        appearance: none;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02IDlsNiA2bDYgLTYiIC8+PC9zdmc+") no-repeat 98.5% 50%;
    }
    :global(.tiptap) {
        outline: none;
        box-shadow: rgba(225, 228, 232, 0.2) 0px 2px 0px inset;
        box-sizing: border-box;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(207, 217, 224);
        border-radius: 0 0 6px 6px;
        color: rgb(65, 77, 99);
        font-size: 0.875rem;
        padding: 10px 0.75rem;
    }
    :global(.tiptap > * + *) {
        margin-top: 0.75em;
    }
    :global(.tiptap ul), :global(.tiptap ol) {
        padding: 0 1rem;
    }
    :global(.tiptap h1), :global(.tiptap h2),:global(.tiptap h3),:global(.tiptap h4),:global(.tiptap h5),:global(.tiptap h6) {
        line-height: 1.1;
    }
    :global(.tiptap img) {
        max-width: 100%;
        height: auto;
    }
    :global(.tiptap a) {
        color: #007bff;
        text-decoration: underline;
    }
    :global(.tiptap blockquote) {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0D0D0D, 0.1);
    }

    :global(.tiptap hr) {
        border: none;
        border-top: 2px solid rgba(#0D0D0D, 0.1);
        margin: 2rem 0;
    }
}
input, select {
    vertical-align: middle;
}
.toolbar {
    height: 2.5rem;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #ccc;
    border-bottom: none;
    button {
        width: 2.5rem;
        height: 2.5rem;
        background: #fff;
        border: none;
        cursor: pointer;
        padding: 0;
        transition: all 0.2s ease-in-out;
    }
    button:hover {
        background: #f5f5f5;
    }
    select {
        background: #fff;
        border: none;
        cursor: pointer;

        padding: 10px 2rem 10px 1rem;
        transition: all 0.2s ease-in-out;
        appearance: none;
        outline: none;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgxMnYxMkgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zIDRsMyAzIDMgLTMiIC8+PC9zdmc+") no-repeat 90% 50%;
    }
    .separator {
        border-left: 1px solid #ccc;
        height: 2.5rem;
    }
    .text-align {
        min-width: 8.05rem;
    }
    .formatting {
        min-width: 8.05rem;
    }
}
select.single, select.multiple {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    padding: 4px 24px 4px 8px;
    transition: all 0.2s ease-in-out;
    width: 120px;
    margin-right: 1rem;
}
select.single:focus, select.multiple:focus {
    border-color: #0077cc;
    outline: none;
}

.link-widget {
    position: absolute;
    width: max(50%, 200px);
    top: 100%;
    right: 0%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 0.5rem;
    z-index: 2;
    gap: 0.5rem;
    input {
        margin-right: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 5px;
    }
    button {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 1rem;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 0;
        height: 100%;
    }
    button:hover {
        background-color: #0056b3;
    }
}


</style>