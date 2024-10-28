// config/testData.ts
import { faker } from '@faker-js/faker';

export const TestData = {
    baseUrl: 'http://localhost:4200',
    generateEmail: () => faker.internet.email(),
    generatePassword: () => faker.internet.password(),
    generateName: () => faker.person.fullName()
};
