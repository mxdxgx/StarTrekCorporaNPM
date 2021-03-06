import { expect } from 'chai';

import { configs } from './../config/configs';

describe("configuration tests", () => {

    it('should have a valid configuration', () => {

        expect(configs).to.not.equal(undefined);
        expect(configs).to.not.equal(null);

    });

    it("should have an api attribute", () => {
        expect(configs.api).to.not.equal(undefined);
        expect(configs.api).to.not.equal(null);

    });

    it("should have all the api attributes", () => {

        if (process.env.NODE_ENV === "production") {
            expect(configs.api).to.deep.include({ host: "startrekcorpora.com" });
        } else if (process.env.NODE_ENV === "development") {
            expect(configs.api).to.deep.include({ host: "localhost" });
        }

        expect(configs.api).to.deep.include({ version: "1.0.0" });
        expect(configs.api).to.deep.include({ port: 5000 });
        expect(configs.api).to.deep.include({ scheme: "http" });
        expect(configs.api).to.deep.include({ path: "/api/v1" });

    });

    it("should build proper api-url", () => {
        if (process.env.NODE_ENV === "production") {
            expect(configs.api_url).to.equal("http://startrekcorpora.com:5000");
        } else if (process.env.NODE_ENV === "development") {
            expect(configs.api_url).to.equal("http://localhost:5000");
        }

    });
});