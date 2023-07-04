import { render } from "@testing-library/vue";
import { BasicBlogPost } from "./blog-post.composition";

it("should render with the correct text", () => {
  const { getByText } = render(BasicBlogPost);
  const rendered = getByText(/Hello World/);
  expect(rendered).toBeTruthy();
});
