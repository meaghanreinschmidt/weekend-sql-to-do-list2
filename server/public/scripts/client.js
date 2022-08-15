$(document).ready(onReady);

function onReady() {
    $('#task-submit').on('click', sendTaskToServer);
    $('body').on('click', '.task-delete', deleteTask);
    $('body').on('click', '.task-complete', completeTask);
    getTasks();
}

// POST
function sendTaskToServer() {
    console.log('in sendTaskToServer');
    $.ajax({
        type: 'POST',
        url: '/task',
        data: {
            task: $('#create-task').val()
        }
    }).then(function (response) {
        getTasks();
    });
}

// GET
function getTasks() {
    $.ajax({
        type: 'GET',
        url: '/task'
    }).then(function (response) {
        let color;
        $('#taskTableBody').empty();
        for (let task of response) {
            if (task.complete === 1) {
                color = 'complete-color'
            } else {
                color = '';
            }
            $('#taskTableBody').append(`
                <tr>
                    <td class="${color}">
                        ${task.task}
                        <button class="task-complete" data-id="${task.id}">&#10004</button>
                        <button class="task-delete" data-id="${task.id}">&#xF5DE</button>
                    </td>
                </tr>
            `);
        }
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
    emptyInput();
}

// PUT
function completeTask() {
    const taskId = $(this).data('id');
    console.log('In completeTask', taskId);
    $.ajax({
        type: 'PUT',
        url: `/task/${taskId}`,
        data: {
            complete: '1'
        }
    }).then(function (response) {
        getTasks();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
}

// DELETE
function deleteTask() {
    const taskId = $(this).data('id');
    console.log('In deleteTask', taskId);
    $.ajax({
        type: 'DELETE',
        url: `/task/${taskId}`
    }).then(function (response) {
        // After deleting, get all tasks
        getTasks();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong!');
    });
}

// Function to clear input field
function emptyInput() {
    $('#create-task').val('');
}