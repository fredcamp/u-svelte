export default function capitalize(title: string): string {
  return title
    .split(' ')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
}
