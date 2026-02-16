const chatbox = document.getElementById('chatbox');
const inputBox = document.getElementById('inputBox');

function sendMessage() {
  const userInput = inputBox.value.trim();
  if (!userInput) return;

  chatbox.innerHTML += `<div class="message user">${userInput}</div>`;
  const botReply = getBotReply(userInput.toLowerCase());
  chatbox.innerHTML += `<div class="message bot">${botReply}</div>`;
  inputBox.value = '';
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotReply(input) {
  if (input.includes("төлбөр")) return "Сургалтын төлбөр: 1 кредит = 85,000₮.";
  if (input.includes("дугаар")) return "Сургалтын албаны дугаар: 7510-0777.";
  if (input.includes("сонгох")) return "Хичээл сонголт SIS системээр хийгдэнэ: sit.shutis.edu.mn";
  if (input.includes("хуулга") || input.includes("дүн")) return "Дүнгийн хуулгыг цахимаар сургалтын албанаас авна.";
  if (input.includes("шалгалт")) return "Шалгалтын хуваарь 12-р сард нийтлэгддэг.";
  if (input.includes("шилжилт хөдөлгөөн") || input.includes("хэзээ")) return "0 долоо хоногт эхэлнэ.";
  if (input.includes("мөнгөө")) return "Сургалтын албатай очиж уулзаарай.";
  if (input.includes("төлбөрийн илүүг") || input.includes("авах")) return "Дансаа үлдээгээрэй.";
  if (input.includes("хичээл сонголт 1")) return "0 долоо хоногийн 3 дахь өдөр нээгдэнэ.";
  return "Уучлаарай, энэ талаар мэдээлэл алга байна. Та өөр асуулт асуугаарай.";
}
