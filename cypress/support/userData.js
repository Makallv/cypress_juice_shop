import {faker} from "@faker-js/faker";

export const userData = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    newPassword: faker.internet.password(),
    word: faker.word.sample(),
}