	// typing status
    const textAreaa = document.getElementById("workarea");
    const textArea1 = document.getElementById("workarea1");
    
    let typingTimer;
    
    textAreaa.addEventListener("input", function(){
        const status = document.getElementById("status");
        clearTimeout(typingTimer);
        status.textContent = "unsaved";
        typingTimer = setTimeout(function(){
            status.textContent = "saved";
        }, 1000);
    
    });
    
    textArea1.addEventListener("input", function(){
        const status = document.getElementById("status");
        clearTimeout(typingTimer);
        status.textContent = "unsaved";

        // to save the information on a database
        
        typingTimer = setTimeout(function(){
            status.textContent = "saved";
        }, 1000);
    
    });

    // converting voice to text 
    // voiceBottom.addEventListener('click', function(){
    //     var speech = true;
    //     window.SpeechRecognition = window.wibkitSpeechRecognition;
    //     const recognition = new SpeechRecognition();
    //     recognition.innerResult = true;
        
    //     recognition.addEventListener('result', e => {
    //         const transcript = Array.from(e.result)
    //         .map(result => result[0])
    //         .map(result => result.transcript)

    //         textArea1.innerHTML = transcript;
    //     })
    //     if(speech == true){
    //         recognition.start();
    //     }
    // })
    // getting a selected element
        //    const output = document.querySelector();

        //    textArea1.addEventListener("pointerup", ()=>{
        //     //  output.innerHTML = `${window.getSelection().toString()}`;
        //     function Bold(){
        //         window.getSelection().toString().style.Bold = true;

        //     }
        //    })

        function makeBold() {
            document.execCommand("bold", false, null); // Apply bold formatting to selected text
        }

        function makeUnderline() {
            document.execCommand("underline", false, null); // Apply underline formatting to selected text
        }

        function makeStrikeThrough() {
            document.execCommand("strikeThrough", false, null); // Apply strike-through formatting to selected text
        }

        function makeItalic() {
            document.execCommand("italic", false, null); // Apply italic formatting to selected text
        }

        function makeHighlight() {
            const col = document.getElementById('colour').value;
            document.execCommand("foreColor", false, col); // Apply highlighting to selected text
        }
        function removeFormat() {
            document.execCommand("removeFormat", false, null); // Apply remove formatting to selected text
        }
        

        // saving the work as pdf

        const fileNameInput = document.querySelector("#flname");
        const textArea = document.querySelector("#workarea1");
        const selectMenu = document.querySelector("#fileType");
        const saveBtn = document.querySelector("#savebtn");
        
        saveBtn.addEventListener("click", () => {
         // Function to create and download a .doc file
function downloadAsDoc(content, fileName) {
    // Create a blob with Word content
    const wordBlob = new Blob(['<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>', content, '</body></html>'], 
    {
        type: 'application/msword'
    });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(wordBlob);
    link.download = fileName + '.doc';
    
    // Trigger the download
    link.click();
}


        downloadAsDoc(textArea1.innerHTML, fileNameInput.value);

        });
        
