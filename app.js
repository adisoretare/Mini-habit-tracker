const add_text=document.getElementById("add_habit_txt");
const add_color=document.getElementById("add_habit_color");
const add_button=document.getElementById("add_habit_button");
const form=document.getElementById("add_habit_form")

const habits_space=document.getElementById("habits")
let i=0;

form.addEventListener("submit",function(event){
    event.preventDefault();//dont refresh after submitt
    i++
    const info={"name":add_text.value,
                "color":add_color.value};
    
    //console.log(info)

    const habit=document.createElement("div")
    
    habit.textContent=info.name;
    
    habit.classList.add("card")
    habit.id="card"+i
    habit.style.setProperty("--color",info.color)
    habits_space.append(habit)

    

})