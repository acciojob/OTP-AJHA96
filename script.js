//your JS code here. If required.
const input= document.querrySelectorAll("input");

inputs.forEach((input, index1)) =>{
	input.addEventListner("keyup", (e) => {
		const currentInput = input,
			nextInput= input.nextElementSibling,
			prevInput = input.previousElementSibling;
		if(currentInput.value.length > 1){
			currentInput.value= "";
			return;
		}

		if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value!== ""){
			nextInput.removeAttribute("disabled");
			nextInput.focus
		}
		if(e.key === "Backspace"){
			inputs.forEach((input, index2) =>{
				if(index1 <= index2 && prevInput)
					
			})
		}
	})
}