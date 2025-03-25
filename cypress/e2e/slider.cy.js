describe("Swiper Gallery Test", function () {
	it('Checks if second slide contains "United Kingdom"', function () {
		cy.visit("http://localhost:3000");
		cy.get(".swiper-button-next").click();
		cy.get(".swiper-slide-active").should("contain", "United Kingdom");
	});
});

describe("Swiper Gallery Test", function () {
	it('Checks if third slide contains "Paris"', function () {
		cy.visit("http://localhost:3000");
		cy.get(".swiper-button-next").click();
		cy.wait(2000);
		cy.get(".swiper-button-next").click({ force: true });
		cy.wait(2000);
		cy.get(".swiper-slide-active").should("contain", "Paris");
	});
});

describe("Swiper Gallery Test", function () {
	it('Checks if second slide contains "London" and previous contains "Rome"', function () {
		cy.visit("http://localhost:3000");
		cy.get(".swiper-button-next").click();
		cy.wait(2000);
		cy.get(".swiper-slide-active").should("contain", "London");
		cy.get(".swiper-button-prev").click();
		cy.wait(2000);
		cy.get(".swiper-slide-active").should("contain", "Rome");
	});
});

describe("Swiper Gallery Test", function () {
	it("Checks if slides contains proper title and description", function () {
		cy.visit("http://localhost:3000");
		cy.get(".swiper-slide-active").should("contain", "Rome");
		cy.get(".swiper-slide-active").should("contain", "Italy");
		cy.get(".swiper-button-next").click();
		cy.wait(2000);
		cy.get(".swiper-slide-active").should("contain", "London");
		cy.get(".swiper-slide-active").should("contain", "United Kingdom");
		cy.get(".swiper-button-next").click();
		cy.wait(2000);
		cy.get(".swiper-slide-active").should("contain", "Paris");
		cy.get(".swiper-slide-active").should("contain", "France");
	});
});

describe("Swiper Gallery Tests", () => {
	const viewports = [
		{ device: "desktop", width: 1280, height: 800 },
		{ device: "tablet", width: 768, height: 1024 },
		{ device: "mobile", width: 375, height: 667 },
	];

	viewports.forEach((viewport) => {
		it(`should display gallery correctly on ${viewport.device}`, function () {
			cy.viewport(viewport.width, viewport.height);
			cy.visit("http://localhost:3000");

			cy.get(".swiper").should("be.visible");
			cy.get(".swiper-slide").should("have.length", 3);
			cy.get(".swiper-button-next").should("be.visible");
			cy.get(".swiper-button-prev").should("be.visible");
		});
	});
});
