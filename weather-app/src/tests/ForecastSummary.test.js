import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary.js";

describe("ForecastSummary", () => {
    const validProps = {
        date: 1111111,
        description: "Stub description",
        icon: "stubIcon",
        temperature: {
          min: 12,
          max: 22,
        },
      };
      
      it("renders correctly", () => {
        const { asFragment } = render(
          <ForecastSummary
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperature={validProps.temperature}
          />
        );

        expect(asFragment()).toMatchSnapshot();
      });

      it("renders correct values for props", () => {
        const { getByText, getByTestId } = render(
          <ForecastSummary
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperature={validProps.temperature}
          />
        );
    
        expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-summary__date");
        expect(getByText("Stub description")).toHaveClass("forecast-summary__description");
        expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
        expect(getByText("22 °C")).toHaveAttribute("Class", "forecast-summary__temperature");
      });
    
});
