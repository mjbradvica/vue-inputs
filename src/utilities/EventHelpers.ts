export function eventToString(event: Event): string {
  return (event.target as HTMLInputElement).value;
}
