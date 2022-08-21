export default function getAvailableAttacks({ special }) {
  for (const element of special) {
    if (!element.description) {
      element.description = 'Описание недоступно';
    }
  }
  return special;
}
