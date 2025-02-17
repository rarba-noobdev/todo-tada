let data = $state([
    {
        "id": crypto.randomUUID(),
        "name": "Hello",
        "createdOn": "How's Life",
        "done": false
    }
]);

export const tasks = {
    get t() {
        return data;
    },

    /**
     * @param {{ id: `${string}-${string}-${string}-${string}-${string}`; name: string; createdOn: string; done: boolean; }[]} val
     */
    set filterT(val) {
        data = val;
    },

    /**
     * @param {any} val
     */
    set filterCompleted(val) {
        data = data.filter((ele) => !(ele === val));
    },
 
    addTask() {
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        data.push(
            {
                "id": crypto.randomUUID(),
                "name": "Type Here......",
                "createdOn": datetime,
                "done": false
            }
        );
        return data;
    }
};