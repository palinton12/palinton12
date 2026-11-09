'use strict';

const lessons = [
  {title:'แนวคิดเชิงคำนวณ',tag:'MODULE 01 · COMPUTATIONAL THINKING',description:'แนวคิดเชิงคำนวณ คือกระบวนการคิดเพื่อแก้ปัญหาอย่างเป็นลำดับและมีประสิทธิภาพ ประกอบด้วยการแบ่งปัญหาออกเป็นส่วนย่อย การหารูปแบบ การคิดเชิงนามธรรม และการออกแบบขั้นตอนวิธี',activity:'ลองวางแผนจัดกระเป๋าไปโรงเรียน โดยแยกงานเป็นรายการย่อยและเรียงลำดับสิ่งที่ต้องทำ'},
  {title:'การแก้ปัญหาและอัลกอริทึม',tag:'MODULE 02 · ALGORITHM',description:'อัลกอริทึม คือชุดคำสั่งหรือขั้นตอนที่ชัดเจนเพื่อแก้ปัญหาหรือทำงานให้สำเร็จ สามารถนำเสนอด้วยข้อความลำดับขั้น รหัสลำลอง หรือผังงาน',activity:'เขียนขั้นตอนการชงเครื่องดื่ม 5–7 ขั้นตอน แล้วให้เพื่อนทดลองทำตาม'},
  {title:'การเขียนโปรแกรม',tag:'MODULE 03 · PROGRAMMING',description:'การเขียนโปรแกรมเป็นการสั่งให้คอมพิวเตอร์ทำงานตามเงื่อนไขที่กำหนด แนวคิดพื้นฐานประกอบด้วยคำสั่ง ตัวแปร การรับและแสดงผล เงื่อนไข และการทำงานแบบวนซ้ำ',activity:'ออกแบบโปรแกรมคำนวณผลรวมตัวเลข 1 ถึง 10 ด้วยลำดับขั้นตอนหรือรหัสลำลอง'},
  {title:'พลเมืองดิจิทัล',tag:'MODULE 04 · DIGITAL CITIZENSHIP',description:'พลเมืองดิจิทัลใช้เทคโนโลยีอย่างรู้เท่าทัน ปลอดภัย เคารพสิทธิและความเป็นส่วนตัว ตรวจสอบความน่าเชื่อถือของข้อมูล และรับผิดชอบต่อการสื่อสารออนไลน์',activity:'ยกตัวอย่างข้อมูลส่วนตัว 3 ประเภทที่ไม่ควรเผยแพร่สู่สาธารณะ พร้อมอธิบายเหตุผล'}
];

const questions = [
  {q:'ข้อใดอธิบายความหมายของแนวคิดเชิงคำนวณได้เหมาะสมที่สุด',a:['การใช้คอมพิวเตอร์ทำงานแทนมนุษย์ทุกอย่าง','กระบวนการคิดเพื่อแก้ปัญหาอย่างเป็นระบบ','การจดจำคำสั่งโปรแกรมให้ได้มากที่สุด','การค้นหาข้อมูลจากอินเทอร์เน็ตเท่านั้น'],correct:1,why:'แนวคิดเชิงคำนวณเป็นกระบวนการคิดอย่างเป็นระบบเพื่อแก้ปัญหา ไม่จำเป็นต้องใช้คอมพิวเตอร์เสมอไป'},
  {q:'การแบ่งปัญหาใหญ่ให้เป็นปัญหาย่อย เรียกว่าอะไร',a:['การหารูปแบบ','การคิดเชิงนามธรรม','การแยกส่วนประกอบของปัญหา','การทดสอบโปรแกรม'],correct:2,why:'การแยกส่วนประกอบช่วยให้จัดการปัญหาที่ซับซ้อนได้ง่ายขึ้น'},
  {q:'ข้อใดเป็นตัวอย่างของการหารูปแบบ',a:['สังเกตตารางเรียนที่มีวิชาซ้ำในแต่ละสัปดาห์','ลบรายละเอียดที่ไม่เกี่ยวข้อง','เขียนคำสั่งให้คอมพิวเตอร์','ตั้งรหัสผ่านใหม่'],correct:0,why:'การหารูปแบบคือการสังเกตความเหมือนหรือแนวโน้มที่เกิดซ้ำ'},
  {q:'อัลกอริทึมหมายถึงข้อใด',a:['อุปกรณ์จัดเก็บข้อมูล','ภาษาที่ใช้เขียนเว็บไซต์เท่านั้น','ชุดขั้นตอนที่ชัดเจนในการแก้ปัญหา','โปรแกรมป้องกันไวรัส'],correct:2,why:'อัลกอริทึมคือขั้นตอนที่กำหนดไว้อย่างชัดเจนเพื่อให้ได้ผลลัพธ์'},
  {q:'สัญลักษณ์รูปสี่เหลี่ยมผืนผ้าในผังงานโดยทั่วไปใช้แทนอะไร',a:['จุดเริ่มต้นหรือสิ้นสุด','การประมวลผล','การตัดสินใจ','การรับข้อมูล'],correct:1,why:'สี่เหลี่ยมผืนผ้าใช้แทนขั้นตอนการประมวลผล'},
  {q:'ข้อใดเป็นประโยชน์ของการเขียนผังงานก่อนเขียนโปรแกรม',a:['ทำให้ไม่ต้องทดสอบโปรแกรม','ช่วยเห็นลำดับและความสัมพันธ์ของขั้นตอน','ทำให้คอมพิวเตอร์ทำงานเร็วขึ้นทันที','ช่วยลดการใช้ไฟฟ้า'],correct:1,why:'ผังงานช่วยวางแผนและตรวจสอบลำดับการทำงานก่อนลงมือเขียนโปรแกรม'},
  {q:'ตัวแปรในการเขียนโปรแกรมมีหน้าที่หลักอย่างไร',a:['เก็บข้อมูลที่โปรแกรมนำไปใช้','เชื่อมต่ออินเทอร์เน็ต','ป้องกันไวรัส','แสดงภาพบนหน้าจอเท่านั้น'],correct:0,why:'ตัวแปรใช้เก็บค่าหรือข้อมูลที่สามารถนำมาอ่านและเปลี่ยนแปลงระหว่างทำงานได้'},
  {q:'คำสั่งเงื่อนไข if ใช้สำหรับทำสิ่งใด',a:['ทำซ้ำตามจำนวนครั้งเท่านั้น','ตรวจสอบเงื่อนไขก่อนเลือกทำงาน','ปิดเครื่องคอมพิวเตอร์','บันทึกไฟล์อัตโนมัติ'],correct:1,why:'คำสั่ง if ใช้ตรวจสอบเงื่อนไขและเลือกทำงานตามผลที่ตรวจสอบได้'},
  {q:'ข้อใดเป็นพฤติกรรมของพลเมืองดิจิทัลที่ดี',a:['ส่งต่อข่าวทันทีโดยไม่ตรวจสอบ','เผยแพร่รหัสผ่านให้เพื่อน','เคารพความเป็นส่วนตัวและตรวจสอบข้อมูลก่อนแชร์','ใช้ภาพผู้อื่นโดยไม่ขออนุญาต'],correct:2,why:'พลเมืองดิจิทัลควรใช้ข้อมูลอย่างรับผิดชอบ เคารพสิทธิ และตรวจสอบก่อนเผยแพร่'},
  {q:'หากได้รับข้อความแนบลิงก์ที่น่าสงสัย ควรทำอย่างไร',a:['กดลิงก์ทันที','ส่งต่อให้ทุกคน','กรอกข้อมูลส่วนตัวเพื่อยืนยัน','ไม่กดลิงก์และตรวจสอบแหล่งที่มาก่อน'],correct:3,why:'หลีกเลี่ยงลิงก์ที่ไม่น่าเชื่อถือและตรวจสอบผู้ส่งหรือแหล่งที่มาก่อนเสมอ'}
];

const $ = (id) => document.getElementById(id);
const menuToggle = $('menuToggle');
const mainNav = $('mainNav');
menuToggle.addEventListener('click', () => {
  const opened = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.setAttribute('aria-label', opened ? 'ปิดเมนู' : 'เปิดเมนู');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const modal = $('lessonModal');
function openLesson(index) {
  const lesson = lessons[index];
  if (!lesson) return;
  $('modalTag').textContent = lesson.tag;
  $('modalTitle').textContent = lesson.title;
  $('modalDescription').textContent = lesson.description;
  $('modalActivity').textContent = lesson.activity;
  modal.classList.remove('hidden');
  $('closeModal').focus();
}
function closeLesson() {
  modal.classList.add('hidden');
}
document.querySelectorAll('.lesson-open').forEach(button => {
  button.addEventListener('click', () => openLesson(Number(button.dataset.lesson)));
});
$('closeModal').addEventListener('click', closeLesson);
$('modalDone').addEventListener('click', closeLesson);
modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeLesson));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeLesson();
});

$('year').textContent = new Date().getFullYear();

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let quizActive = false;

function showBestScore() {
  let best = null;
  try { best = localStorage.getItem('computingScienceBestScore'); } catch (error) { /* storage may be disabled */ }
  $('bestScore').textContent = best === null ? 'คะแนนสูงสุดของคุณ: ยังไม่มีข้อมูล' : `คะแนนสูงสุดของคุณ: ${best} / 10`;
}
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  quizActive = true;
  $('quizStart').classList.add('hidden');
  $('quizResult').classList.add('hidden');
  $('quizPlay').classList.remove('hidden');
  renderQuestion();
}
function renderQuestion() {
  const item = questions[currentQuestion];
  selectedAnswer = null;
  $('questionCounter').textContent = `ข้อ ${currentQuestion + 1} จาก ${questions.length}`;
  const percent = Math.round(((currentQuestion + 1) / questions.length) * 100);
  $('progressPercent').textContent = `${percent}%`;
  $('progressBar').style.width = `${percent}%`;
  $('questionText').textContent = item.q;
  $('quizFeedback').textContent = '';
  $('nextQuestion').disabled = true;
  $('nextQuestion').textContent = currentQuestion === questions.length - 1 ? 'ดูผลคะแนน →' : 'ข้อต่อไป →';
  const answers = $('answers');
  answers.replaceChildren();
  item.a.forEach((answer, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.textContent = `${['ก','ข','ค','ง'][index]}. ${answer}`;
    button.addEventListener('click', () => chooseAnswer(index));
    answers.appendChild(button);
  });
}
function chooseAnswer(index) {
  if (selectedAnswer !== null || !quizActive) return;
  selectedAnswer = index;
  const item = questions[currentQuestion];
  const buttons = [...$('answers').querySelectorAll('button')];
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === item.correct) button.classList.add('correct');
    else if (i === index) button.classList.add('wrong');
  });
  if (index === item.correct) {
    score += 1;
    $('quizFeedback').textContent = `✓ ถูกต้อง! ${item.why}`;
  } else {
    $('quizFeedback').textContent = `ยังไม่ถูกต้อง · ${item.why}`;
    $('quizFeedback').style.color = '#c24e4e';
  }
  $('nextQuestion').disabled = false;
}
function finishQuiz() {
  quizActive = false;
  $('quizPlay').classList.add('hidden');
  $('quizResult').classList.remove('hidden');
  $('scoreValue').textContent = score;
  const title = score >= 8 ? 'ยอดเยี่ยม!' : score >= 5 ? 'ทำได้ดี!' : 'ลองทบทวนอีกครั้ง';
  $('resultTitle').textContent = title;
  $('resultMessage').textContent = score >= 8 ? 'คุณมีความเข้าใจพื้นฐานที่ดีมาก รักษาความตั้งใจนี้ไว้!' : score >= 5 ? 'คุณเข้าใจเนื้อหาหลายส่วนแล้ว ลองทบทวนข้อที่ยังไม่แม่นยำ' : 'ไม่เป็นไร ทุกความผิดพลาดคือโอกาสเรียนรู้ ลองกลับไปอ่านบทเรียนแล้วทำใหม่';
  try {
    const oldBest = Number(localStorage.getItem('computingScienceBestScore') || 0);
    if (score > oldBest || localStorage.getItem('computingScienceBestScore') === null) {
      localStorage.setItem('computingScienceBestScore', String(score));
    }
  } catch (error) { /* quiz remains usable without local storage */ }
  showBestScore();
}
$('startQuiz').addEventListener('click', startQuiz);
$('retryQuiz').addEventListener('click', startQuiz);
$('nextQuestion').addEventListener('click', () => {
  if (selectedAnswer === null) return;
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    $('quizFeedback').style.color = '';
    renderQuestion();
  } else finishQuiz();
});
showBestScore();
