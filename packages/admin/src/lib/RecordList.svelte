<script>
    import { collectionId } from "./stores/location";

    /** @type {any} */
    export let config;

    /** @type {any} */
    export let collection;

    let selected = [];

    let deleteModal = false;

    function deleteRecords(){
        collection = Object.fromEntries(Object.entries(collection).filter(([id, _]) => !selected.includes(id)));
        
        fetch('/hg-admin/collections', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {[$collectionId]: collection})
        }).then(response => {
            if (response.status === 200) {
                selected = [];
                deleteModal = false;
            }
        });
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if deleteModal}
<div class="overlay-backdrop" on:click={() => deleteModal = false}>
    <modal-dialog class="overlay" on:click|stopPropagation>
        <h2>
            Are you sure you want to delete the {config.title} record?
        </h2>
        <div class="btn-end">
            <button class="btn" on:click={() => deleteModal = false}>Cancel</button>
            <button class="btn danger" on:click={deleteRecords}>Delete</button>
        </div>
    </modal-dialog>
</div>
{/if}

<h2>{config.title}</h2>

{#if selected.length > 0}
<div class="btn-list">
    <button class="btn" on:click={() => {
    }}>Duplicate</button>
    <button class="btn danger" on:click={() => deleteModal = true}>Delete</button>
</div>
{/if}

<div class="table-container">
    <table cellspacing="0" cellpadding="0">
        <thead>
            <tr>
                <th class="checkbox">
                    <input type="checkbox" checked={selected.length === Object.keys(collection).length} on:click={() => {
                        if (selected.length === Object.keys(collection).length) {
                            selected = [];
                        } else {
                            selected = Object.keys(collection);
                        }
                    }}/>
                </th>
                {#if config.listFields}
                    {#each Object.entries(config.fields) as [name, field]}
                        {#if config.listFields.includes(name)}
                            <th class="list-heading-item">{field.label}</th>
                        {/if}
                    {/each}
                {:else}
                    {#each Object.values(config.fields) as field}
                        <th class="list-heading-item">{field.label}</th>
                    {/each}
                {/if}
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(collection) as [id, entry] }
                <tr class:selected={selected.includes(id)}>
                    <td class="list-item-item checkbox" on:click={() => {
                            let index = selected.indexOf(id);
                            if (index > -1) {
                                selected = selected.filter((_, i) => i !== index);
                            } else {
                                selected = [...selected, id];
                            }
                        }}>
                        <input type="checkbox" checked={selected.includes(id)} />
                    </td>
                    {#if config.listFields}
                        {#each Object.keys(config.fields) as name}
                            {#if config.listFields.includes(name)}
                                <td class="list-item-item">
                                    <a class="list-item" href="#/content/{$collectionId}/{id}">
                                        {typeof entry[name] === 'string' && (entry[name]).length > 30 ? (entry[name]).substring(0, 30) + "..." : entry[name]}
                                    </a>
                                </td>
                            {/if}
                        {/each}
                    {:else}
                        {#each Object.keys(config.fields) as name}
                            <td class="list-item-item">
                                <a class="list-item" href="#/content/{$collectionId}/{id}">
                                    {typeof entry[name] === 'string' && (entry[name]).length > 30 ? (entry[name]).substring(0, 30) + "..." : entry[name]}
                                </a>
                            </td>
                        {/each}
                    {/if}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
h2 {
    margin: 1.5rem 0 1rem;
    scroll-margin-top: 4rem;
    line-height: 1.25;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
}
.table-container {
    overflow-x: auto;
}
table {
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-spacing: 0px;
    border-collapse: separate;
    font-size: 0.875rem;
    table-layout: fixed;
}
tr.selected {
    background-color: rgb(246, 248, 250);
}
th {
    color: rgb(101, 109, 118);
    font-weight: 600;
    padding: 1rem 1.5rem;
    text-align: start;
    white-space: nowrap;
}
.checkbox {
    width: 2rem;
}
td.checkbox {
    padding: 1rem 1.5rem;
}
th, td {
    border-bottom: 1px solid rgb(208, 215, 222);
    overflow: hidden;
}

tbody a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 1rem 1.5rem;
    white-space: nowrap;
}
tbody tr {
    transition: all 0.3s ease;
}
tbody tr:hover {
    background-color: rgb(246, 248, 250);
}
.btn-list {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
}
.btn-end {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    gap: 1rem;
}
.overlay-backdrop {
    align-items: center;
    background-color: rgba(175,184,193,0.2);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
}
.overlay {
    background-color: #fff;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgba(31,35,40,0.12), 0 8px 24px rgba(66,74,83,0.12);
    display: flex;
    flex-direction: column;
    max-height: min(100vh - 2rem, 600px);
    min-width: 192px;
    opacity: 1;
    white-space: normal;
    width: min(600px,100vw - 4rem);
}
modal-dialog h2 {
    margin: 1.5rem 0 1rem;
    scroll-margin-top: 4rem;
    line-height: 1.25;
    font-size: 1.5rem;
    border-bottom: 1px solid rgb(208, 215, 222);
    font-weight: 500;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 1rem 1rem 1rem 1.5rem;
    font-size: 1rem;
    margin: 0;
    line-height: 1.5rem;
}
</style>