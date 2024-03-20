class Currency {
    protected name: string;
    protected code: string;
    protected symbol: string;

    constructor(name: string, code: string, symbol: string) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }

    public describe(): void {
        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;

        console.log(description);
    }
}

class DetailedCurrency extends Currency {
    private banknotes: number[];

    constructor(name: string, code: string, symbol: string, banknotes: number[]) {
        super(name, code, symbol);
        this.banknotes = banknotes;
    }

    // Change visibility modifier from private to protected
    protected describeBankNotes() {
        let description = `The ${this.name} currency uses the banknotes `;
        description += this.banknotes.join(', ');
        console.log(description);
    }

    // Override the describe method
    public describe(): void {
        super.describe();
        this.describeBankNotes();
    }
}

const euroCurrency = new DetailedCurrency("Euro", "EUR", "€", [500, 200, 100, 50, 20, 10, 5]);
euroCurrency.describe();

// Access describeBankNotes method from outside the class
euroCurrency.describeBankNotes();

export {};
