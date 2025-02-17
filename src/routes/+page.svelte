<script>
	import { tasks } from "./data.svelte.js";
    let done = $derived(tasks.t.filter((ele) => !ele.done))
    import tippy from 'svelte-tippy';
    import 'tippy.js/themes/material.css';
    import 'tippy.js/animations/perspective-subtle.css';
$effect(() => {
    console.log("Thanks Da Tawheed , Shameer , Stephen , Vignesh \nyou are always my friends");
    
})
</script>
<svelte:head>
    <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,1&f[]=satoshi@300,301,400,401,500,501,700,701,900,901,1,2&display=swap" rel="stylesheet">
</svelte:head>

<div class="buttons p-3 flex flex-row-reverse gap-3">
    <button style=" background-color: #FF6500; " onclick={() => {tasks.filterT = done}} class="clear-completed p-1 font-medium text-xl">Clear Completed</button>
    <button style=" background-color: #FF6500; " onclick={() => {tasks.addTask()}} class="add-task p-1 font-medium text-xl">Add Task</button>
</div>

<div class="main">
    <h1 class="font-bold text-4xl p-1">Tasks</h1>
    <p class="font-medium text-2xl p-1">{tasks.t.length - done.length}/{tasks.t.length} Tasks Completed</p>
    <hr>
    <p class="p-1">{done.length} Remaining</p>
    <hr>
</div>

<div class="task-container">
    <p class="font-medium text-2xl p-1">Tasks To Do</p>
    {#each tasks.t as task (task.id)}
        {#if !task.done} 
        <div class="task flex place-content-between font-medium text-lg p-1 m-1" style="background-color: #0B192C;">
<div class="in-fields">
    <input type="checkbox" bind:checked={task.done}>
    <input class="w-2xl" type="text" bind:value={task.name}>
</div>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <div class="actions flex flex-row gap-10">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button 
                class="button"
  use:tippy={{
    content: task.createdOn,
    placement: 'top',
    arrow: true,
    theme: 'material',
    animation: 'perspective-subtle'
  }} >
                    
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                  </svg>
                </button>

                <!-- svelte-ignore a11y_click_events_have_key_events -->
 <button>
    <svg onclick={() => tasks.filterCompleted = task} aria-label="delete button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg>
 </button>
            </div>
        </div>
        {/if}
    {/each}
    <p class="font-medium text-2xl p-1">Completed</p>
    {#each tasks.t as task (task.id) }
        {#if task.done} 
        <div class="task flex place-content-between font-medium text-lg p-1 m-1" style="background-color: #0B192C;">
            <div class="in-fields">
                <input type="checkbox" bind:checked={task.done}>
                <input class="w-2xl" type="text" bind:value={task.name}>
            </div>
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <!-- svelte-ignore a11y_consider_explicit_label -->
                        <div class="actions flex flex-row gap-10">
                            <!-- svelte-ignore a11y_consider_explicit_label -->
                            <button >
                                
                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                              </svg>
                            </button>
            
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
             <button>
                <svg onclick={() => tasks.filterCompleted = task} aria-label="delete button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
             </button>
                        </div>
                    </div>
        {/if}
    {/each}

</div>
