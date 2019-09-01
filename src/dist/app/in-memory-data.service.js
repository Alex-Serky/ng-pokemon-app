"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_pokemons_1 = require("./pokemons/mock-pokemons");
class InMemoryDataService {
    createDb() {
        let pokemons = mock_pokemons_1.POKEMONS;
        return { pokemons };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map