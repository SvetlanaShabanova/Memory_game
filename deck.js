/**
 * Колода карт. Класс отвечает за создание и тасование карт. Содержит список изображений карт.
 */
class Deck {
    #cardsImages = ["Balloon.png", "Clown.png", "Death.png", "Evil_pumpkin.png", "Ghost_in_frame.png", "Ghost_tree.png",
        "Witch_with_book.png", "Witch_head.png", "Witch_on_broom.png", "Zombie.png"];

    constructor() {
        this.cards = [];
        this.#cardsImages.forEach(image => {
            this.cards.push(new Card(image));
            this.cards.push(new Card(image));
        });
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    removeCard(card) {
        let index = this.cards.findIndex(item => item.imagePath == card.imagePath);
        if (index != -1) {
            this.cards.splice(index, 1);
            card.disconectFromDOM();
        }
    }
}