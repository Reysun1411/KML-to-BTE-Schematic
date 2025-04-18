const statusDiv = document.getElementById('status');
const importKml = document.getElementById('importKML');
const exportSchem = document.getElementById('exportSchem');
const blockIdInput = document.getElementById('blockId');
const exportFileNameInput = document.getElementById('exportFileName');

// Обработка кнопки импорта
importKml.addEventListener('click', () => {
  console.log('Import KML');
  window.electron.invokeImportKML();
});

// Обработка кнопки экспорта
exportSchem.addEventListener('click', () => {
  console.log('Export schem');
  const blockId = blockIdInput.value; // Значение diamond_block
  const exportFileName = exportFileNameInput.value; // Значение converted
  window.electron.invokeExportSchem(blockId, exportFileName);
});

// Оповещение об успешном импорте
window.electron.onImportSuccess((fileName) => {
  statusDiv.textContent = `Файл загружен: ${fileName}`;
  statusDiv.style.color = 'lightBlue';
});

// Оповещение о процессе конвертации
window.electron.onConverting(() => {
  statusDiv.textContent = 'Идет конвертация...'
  statusDiv.style.color = 'wheat'
})

// Оповещение об успешном экспорте
window.electron.onExportSuccess(() => {
  statusDiv.textContent = 'Файл успешно сохранен!';
  statusDiv.style.color = 'MediumSeaGreen';
})
