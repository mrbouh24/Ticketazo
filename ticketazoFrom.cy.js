describe('Formulario Registro Usuario',()=> {
    beforeEach(() => {
        cy.visit('https://ticketazo.com.ar/auth/registerUser')
    });

it('Happy Path', () => {
    cy.get('[data-cy="input-nombres"]').type('Mariana');
    cy.get('[data-cy="input-apellido"]').type('Bouhid');
    cy.get('[data-cy="input-telefono"]').type('38747574623');
    cy.get('[data-cy="input-dni"]').type('012578275');
    cy.get('[data-cy=select-provincia]').click();
    cy.get('[data-cy=select-provincia]').type('Cordoba{enter}');
    cy.get('[data-cy=select-localidad]').click();
    cy.get('[data-cy=select-localidad]').type('La Calera{enter}');
    cy.contains('dd').type('20{enter}');
    cy.contains('mm').type('03{enter}');
    cy.contains('aaaa').type('1990{enter}');
    cy.get('[data-cy="input-email"]').type('bouhid@unmail.com');
    cy.get('[data-cy="input-confirmar-email"]').type('bouhid@unmail.com');
    cy.get('[data-cy="input-password"]').type('Contraseñasegura10.');
    cy.get('[data-cy="input-repetir-password"]').type('Contraseñasegura10.');
    cy.get('[data-cy="btn-registrarse"]').click();


})
it('Campo mandatorio con espacio (nombre)', () => {
    cy.get('[data-cy="input-nombres"]').type(' ');
    cy.get('[data-cy="input-apellido"]').type('Bouhid');
    cy.get('[data-cy="input-telefono"]').type('38747574623');
    cy.get('[data-cy="input-dni"]').type('125782745');
    cy.get('[data-cy=select-provincia]').click();
    cy.get('[data-cy=select-provincia]').type('Cordoba{enter}');
    cy.get('[data-cy=select-localidad]').click();
    cy.get('[data-cy=select-localidad]').type('La Calera{enter}');
    cy.contains('dd').type('20{enter}');
    cy.contains('mm').type('03{enter}');
    cy.contains('aaaa').type('1990{enter}');
    cy.get('[data-cy="input-email"]').type('bouhiid@unmail.com');
    cy.get('[data-cy="input-confirmar-email"]').type('bouhiid@unmail.com');
    cy.get('[data-cy="input-password"]').type('Contraseñasegura10.');
    cy.get('[data-cy="input-repetir-password"]').type('Contraseñasegura10.');
    cy.get('[data-cy="btn-registrarse"]').click();


})
it('Dato invalido (mail)', () => {
    cy.get('[data-cy="input-nombres"]').type(' ');
    cy.get('[data-cy="input-apellido"]').type('Bouhid');
    cy.get('[data-cy="input-telefono"]').type('38747574623');
    cy.get('[data-cy="input-dni"]').type('125732745');
    cy.get('[data-cy=select-provincia]').click();
    cy.get('[data-cy=select-provincia]').type('Cordoba{enter}');
    cy.get('[data-cy=select-localidad]').click();
    cy.get('[data-cy=select-localidad]').type('La Calera{enter}');
    cy.contains('dd').type('20{enter}');
    cy.contains('mm').type('03{enter}');
    cy.contains('aaaa').type('1990{enter}');
    cy.get('[data-cy="input-email"]').type('bouhiid@@unmail.com');
    cy.get('[data-cy="input-confirmar-email"]').type('bouhiid@@unmail.com');
    cy.get('[data-cy="input-password"]').type('Contraseñasegura10.');
    cy.get('[data-cy="input-repetir-password"]').type('Contraseñasegura10.');
    cy.get('[data-cy="btn-registrarse"]').click();


})
it('Dato invalido (dni)', () => {
    cy.get('[data-cy="input-nombres"]').type(' ');
    cy.get('[data-cy="input-apellido"]').type('Bouhid');
    cy.get('[data-cy="input-telefono"]').type('38747574623');
    cy.get('[data-cy="input-dni"]').type('.25732745');
    cy.get('[data-cy=select-provincia]').click();
    cy.get('[data-cy=select-provincia]').type('Cordoba{enter}');
    cy.get('[data-cy=select-localidad]').click();
    cy.get('[data-cy=select-localidad]').type('La Calera{enter}');
    cy.contains('dd').type('20{enter}');
    cy.contains('mm').type('03{enter}');
    cy.contains('aaaa').type('1990{enter}');
    cy.get('[data-cy="input-email"]').type('bouiid@unmail.com');
    cy.get('[data-cy="input-confirmar-email"]').type('bouiid@unmail.com');
    cy.get('[data-cy="input-password"]').type('Contraseñasegura10.');
    cy.get('[data-cy="input-repetir-password"]').type('Contraseñasegura10.');
    cy.get('[data-cy="btn-registrarse"]').click();


})
})