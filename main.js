const selectTag = document.querySelectorAll("select");
const translateBtn = document.querySelector("button");
const fromText = document.querySelector(".from-text");

selectTag.forEach( (tag, id) => {
    for (const country_code in countries) {
        //Selecting En as default language for FROM and HI as TO
        let selected;
        if(id ==0 && country_code == "en-GB"){
            selected = "selected";
        }
        else if(id ==1 && country_code == "ur-PK"){
            selected = "selected";
        }

        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);         //Adding Option Tag inside Select Tag
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value;
    let translateFrom = selectTag[0].value;             //Getting from select tag value
    let translateTo = selectTag[1].value;               //Getting to select tag value
    console.log(text, translateFrom, translateTo);
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    // Fetching API response and returnuing it with parsing into JS Object and in another then method
    // Receiveing it
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
    })
})






//https://mymemory.translated.net/doc/spec.php