// ===== Elements =====
const add_text = document.getElementById("add_habit_txt");
const add_color = document.getElementById("add_habit_color");
const add_button = document.getElementById("add_habit_button");
const form = document.getElementById("add_habit_form");
const habits_space = document.getElementById("habits");

// ===== Data =====
let i = 0;
let habits = [];
let logs = [];

// ===== Render =====
function render() {
    habits_space.innerHTML="";
    habits.forEach(function(h){
        const habit = document.createElement("div");
    const title = document.createElement("h2");
    const grid = document.createElement("div");

    grid.classList.add("grid");
    for (let d = 0; d < 18; d++) {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.append(square);
    }
    habit.append(grid);

    title.textContent = info.name;

    habit.classList.add("card");
    habit.id = "card" + i;
    habit.style.setProperty("--color", info.color);
    habit.append(title);
    habit.append(grid);

    habits_space.append(habit);
    })
}

// ===== Add habit =====
form.addEventListener("submit", function (event) {
    event.preventDefault(); // don't refresh after submit
    i++;

    const info = {
        "name": add_text.value,
        "color": add_color.value,
        "id":i
    };

    // console.log(info);

    
    habits.push(info);
    console.log(habits);
});
