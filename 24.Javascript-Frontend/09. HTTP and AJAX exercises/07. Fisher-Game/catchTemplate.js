const template = (data) => `
    div class="catch">
    <label>Angler</label>
    <input type="text" class="angler" value="${data.angler}">
    <label>Weight</label>
    <input type="text" class="weight" value="${data.weight}">
    <label>Species</label>
    <input type="text" class="species" value="${data.species}">
    <label>Location</label>
    <input type="text" class="location" value="${data.location}">
    <label>Bait</label>
    <input type="text" class="bait" value="${data.bait}">
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${data.captureTime}">
    <button class="update" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Update</button>
    <button class="delete" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Delete</button>
    </div>`

export default template;