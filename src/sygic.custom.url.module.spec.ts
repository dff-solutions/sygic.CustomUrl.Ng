import { TestBed } from "@angular/core/testing";
import { CustomUrlService } from "sygic-custom-url";
import { SygicCustomUrlModule } from ".";

describe("SygicCustomUrlModule", () => {
    let customUrlService: CustomUrlService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ SygicCustomUrlModule ]
        });

        customUrlService = TestBed.get(CustomUrlService);
    });

    it("should be defined", () => {
        expect(SygicCustomUrlModule).toBeDefined();
    });

    it("should provice CustomUrlService", () => {
        expect(customUrlService).toEqual(jasmine.any(CustomUrlService));
    });
});
