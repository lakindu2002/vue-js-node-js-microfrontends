import { render } from "@testing-library/vue";
import { BasicBlogPosts } from "./blog-posts.composition";

it("should render with the correct title", () => {
  const { getByText } = render(BasicBlogPosts);
  const rendered = getByText(/Title 01/);
  expect(rendered).toBeTruthy();
});
