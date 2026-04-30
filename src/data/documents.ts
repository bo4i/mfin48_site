export const documents = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Приказ/Постановление №${100 + i}`,
  type: i % 2 ? 'Приказ' : 'Постановление',
  year: 2023 + (i % 4),
  status: i % 3 ? 'Действует' : 'Проект',
  format: i % 2 ? 'PDF' : 'DOCX'
}))
