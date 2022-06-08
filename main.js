async function populate() {

    const requestURL =
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);


    const response = await fetch(request);
    const superHeroes = await response.json();


    populateHeader(superHeroes);
    populateHeroes(superHeroes);

}


function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj["squadName"];
    header.appendChild(myH1);

    const myParagraph = document.createElement("p");
    myParagraph.textContent = `Hometown: ${ obj["homeTown"] } //  
        Formed: ${ obj["formed"] }`;
    header.appendChild(myParagraph);
}


function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj["members"];


    for (const hero of heroes) {
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myParagraph1 = document.createElement("p");
        const myParagraph2 = document.createElement("p");
        const myParagraph3 = document.createElement("p");
        const myList = document.createElement("ul");


        myH2.textContent = hero.name;
        myParagraph1.textContent = `Secret identity: 
            ${ hero.secretIdentity }`;
        myParagraph2.textContent = `Age: ${ hero.age }`;
        myParagraph3.textContent = "Superpowers: ";


        const superPowers = hero.powers;
        for (const power of superPowers) {
            const listItem = document.createElement("li");
            listItem.textContent = power;
            myList.appendChild(listItem);
        }


        const myArticleElements = [myH2, myParagraph1,
            myParagraph2, myParagraph3, myList];
        for (const element of myArticleElements) {
            myArticle.appendChild(element);
        }


        section.appendChild(myArticle);

    }
}

populate();

