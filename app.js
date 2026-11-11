const add_text=document.getElementById("add_habit_txt");
const add_color=document.getElementById("add_habit_color");
const add_button=document.getElementById("add_habit_button");
const form=document.getElementById("add_habit_form")

form.addEventListener("submit",function(){
    event.preventDefault();//dont refresh after submitt

    const info={"name":add_text.value,
                "color":add_color.value};

    const name=info["name"];
    const color=info["color"];

    console.log(info)

})