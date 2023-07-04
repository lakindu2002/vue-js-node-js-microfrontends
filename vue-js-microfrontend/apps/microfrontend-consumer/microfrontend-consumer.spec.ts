import { render } from "@testing-library/vue";
import MicrofrontendConsumer from "./microfrontend-consumer.vue";

it("should render with the correct text", () => {
  const { getByText } = render(MicrofrontendConsumer);
  const rendered = getByText(/App/);
  expect(rendered).toBeTruthy();
});
