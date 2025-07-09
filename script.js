// Global variables (متغيرات عامة)
let currentScreen = 'mainScreen'; // الشاشة النشطة حالياً
let currentQuestionIndex = 0; // مؤشر السؤال الحالي في الاختبار
let userAnswers = []; // إجابات المستخدم
let timer; // متغير لمؤقت الاختبار
let timeLeft = 0; // الوقت المتبقي (بالثواني)

// Function to show a specific screen (دالة لإظهار شاشة معينة)
function showScreen(screenId) {
    // إخفاء الشاشة النشطة حالياً
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen) {
        activeScreen.classList.remove('active');
    }

    // إظهار الشاشة المطلوبة
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId; // تحديث الشاشة النشطة
        // التمرير إلى الأعلى عند تغيير الشاشة لضمان ظهور المحتوى من البداية
        targetScreen.scrollTop = 0;
    }

    // تحديث حالة الأزرار في الهيدر والناف بار السفلي
    updateNavigationState();

    // منطق خاص عند عرض شاشة الاختبار لأول مرة
    if (screenId === 'examScreen' && currentQuestionIndex === 0 && userAnswers.length === 0) {
        startExam(); // بدء الاختبار فقط إذا لم يكن قد بدأ
    }
}

// Function to update navigation active state (تحديث حالة التنقل)
function updateNavigationState() {
    // تحديث روابط الهيدر
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-screen-id') === currentScreen) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // تحديث روابط القائمة الجانبية (Sidebar)
    document.querySelectorAll('.sidebar-link').forEach(link => {
        if (link.getAttribute('data-screen-id') === currentScreen) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // تحديث روابط الناف بار السفلي
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        if (item.getAttribute('data-screen-id') === currentScreen) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}


// Sidebar functionality (وظائف القائمة الجانبية)
function openSidebar() {
    document.getElementById("mySidebar").classList.add("open");
    document.getElementById("overlay").classList.add("active");
}

function closeSidebar() {
    document.getElementById("mySidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");
}

// Close sidebar if overlay is clicked (إغلاق القائمة عند النقر على الخلفية المعتمة)
document.getElementById("overlay").addEventListener('click', closeSidebar);


// Testimonial Slider functionality (وظائف شريط شهادات الطلاب)
const testimonialSlider = document.querySelector('.testimonial-slider');
const sliderDotsContainer = document.querySelector('.slider-dots');
let testimonialIndex = 0;

// إضافة مستمعي الأحداث لأزرار التنقل
document.getElementById('prevTestimonial').addEventListener('click', () => changeTestimonial(-1));
document.getElementById('nextTestimonial').addEventListener('click', () => changeTestimonial(1));

function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
    updateTestimonialSlider();
}

function updateTestimonialSlider() {
    const testimonialWidth = testimonialSlider.querySelector('.testimonial-card').offsetWidth + 30; // عرض البطاقة + الفجوة
    testimonialSlider.style.transform = `translateX(-${testimonialIndex * testimonialWidth}px)`;
    updateSliderDots();
}

function updateSliderDots() {
    sliderDotsContainer.innerHTML = ''; // مسح النقاط القديمة
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (idx === testimonialIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            testimonialIndex = idx;
            updateTestimonialSlider();
        });
        sliderDotsContainer.appendChild(dot);
    });
}
// تهيئة السلايدر والنقاط عند تحميل الصفحة
window.addEventListener('load', () => {
    updateTestimonialSlider(); // تحديث الموضع الأولي
});

// Update slider on window resize (تحديث السلايدر عند تغيير حجم النافذة)
window.addEventListener('resize', () => {
    updateTestimonialSlider();
});

// Initial call to set up the slider dots (استدعاء أولي لإعداد نقاط السلايدر)
updateSliderDots();


// Exam data (بيانات الاختبار) - هذا الجزء يمكن أن يأتي من API مستقبلاً
const examQuestions = [
    {
        question: "أي من التالي يُعتبر من خصائص الكائنات الحية؟",
        options: ["التحرك فقط", "النمو والتكاثر", "التنفس فقط", "التواصل"],
        correctAnswer: "النمو والتكاثر",
        explanation: "النمو والتكاثر من الخصائص الأساسية التي تميز الكائنات الحية عن الجمادات."
    },
    {
        question: "ما هو المركز الرئيسي للتحكم في جسم الإنسان؟",
        options: ["القلب", "الرئتان", "الدماغ", "المعدة"],
        correctAnswer: "الدماغ",
        explanation: "الدماغ هو الجزء المسؤول عن معالجة المعلومات والتحكم في وظائف الجسم."
    },
    {
        question: "المركب <span class='latex-math'>H<sub>2</sub>O</span> هو الاسم العلمي لـ:",
        options: ["ثاني أكسيد الكربون", "الأكسجين", "الماء", "النيتروجين"],
        correctAnswer: "الماء",
        explanation: "الرمز <span class='latex-math'>H<sub>2</sub>O</span> يشير إلى جزيء الماء، حيث يتكون من ذرتي هيدروجين وذرة أكسجين."
    },
    {
        question: "أي مما يلي يُعد من الغدد الصماء؟",
        options: ["الغدد اللعابية", "الغدد العرقية", "الغدة الدرقية", "الغدد الدمعية"],
        correctAnswer: "الغدة الدرقية",
        explanation: "الغدد الصماء هي الغدد التي تفرز هرموناتها مباشرة في مجرى الدم، والغدة الدرقية هي مثال على ذلك."
    },
    {
        question: "ما هي وحدة قياس القوة في النظام الدولي للوحدات <span class='english'>(SI)</span>؟",
        options: ["الواط", "الجول", "النيوتن", "الأوم"],
        correctAnswer: "النيوتن",
        explanation: "النيوتن <span class='english'>(Newton)</span> هي وحدة قياس القوة في النظام الدولي للوحدات، وتُرمز لها بالرمز <span class='english'>N</span>."
    }
    // يمكن إضافة المزيد من الأسئلة هنا
];

// Function to start the exam (دالة لبدء الاختبار)
function startExam() {
    currentQuestionIndex = 0;
    userAnswers = Array(examQuestions.length).fill(null); // تهيئة الإجابات بـ null
    timeLeft = 30 * 60; // 30 دقيقة * 60 ثانية/دقيقة = 1800 ثانية
    displayQuestion();
    startTimer();
}

// Function to display current question (دالة لعرض السؤال الحالي)
function displayQuestion() {
    const questionData = examQuestions[currentQuestionIndex];
    const questionContainer = document.getElementById('questionContainer');
    const optionsContainer = document.getElementById('optionsContainer');
    const prevButton = document.getElementById('prevQuestion');
    const nextButton = document.getElementById('nextQuestion');
    const finishButton = document.getElementById('finishExam');

    questionContainer.querySelector('.question-text').innerHTML = questionData.question;
    optionsContainer.innerHTML = ''; // مسح الخيارات القديمة

    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.innerHTML = option; // استخدام innerHTML للسماح بالـ HTML داخل الخيارات
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    // تمييز الإجابة المختارة سابقاً إن وجدت
    if (userAnswers[currentQuestionIndex] !== null) {
        optionsContainer.children[userAnswers[currentQuestionIndex]].classList.add('selected');
    }

    // تحديث حالة أزرار التنقل (السابق والتالي)
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === examQuestions.length - 1;

    // إظهار زر "إنهاء الاختبار" فقط في السؤال الأخير
    if (currentQuestionIndex === examQuestions.length - 1) {
        finishButton.style.display = 'inline-block'; // أو 'flex' إذا كان الأب flex
    } else {
        finishButton.style.display = 'none';
    }
}

// Function to select an option (دالة لاختيار إجابة)
function selectOption(optionIndex) {
    // إزالة التحديد من جميع الخيارات أولاً
    document.querySelectorAll('.option-button').forEach(button => {
        button.classList.remove('selected');
    });

    // إضافة التحديد للخيار المختار
    document.getElementById('optionsContainer').children[optionIndex].classList.add('selected');

    // حفظ إجابة المستخدم
    userAnswers[currentQuestionIndex] = optionIndex;
}

// Function to navigate questions (دالة للتنقل بين الأسئلة)
function navigateQuestion(direction) {
    if (direction === 'next' && currentQuestionIndex < examQuestions.length - 1) {
        currentQuestionIndex++;
    } else if (direction === 'prev' && currentQuestionIndex > 0) {
        currentQuestionIndex--;
    }
    displayQuestion();
}

// Timer functionality (وظائف المؤقت)
function startTimer() {
    if (timer) clearInterval(timer); // مسح أي مؤقت سابق

    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timerDisplay').textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('انتهى وقت الاختبار!');
            finishExam();
        }
    }, 1000); // تحديث كل ثانية
}

// Function to finish the exam (دالة لإنهاء الاختبار)
function finishExam() {
    clearInterval(timer); // إيقاف المؤقت
    calculateResults();
    showScreen('resultScreen'); // عرض شاشة النتائج
}

// Function to calculate results (دالة لحساب النتائج)
function calculateResults() {
    let score = 0;
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = ''; // مسح المراجعات القديمة

    examQuestions.forEach((question, index) => {
        const userAnswerIndex = userAnswers[index];
        const userAnswerText = userAnswerIndex !== null ? question.options[userAnswerIndex] : "لم يتم الإجابة";
        const isCorrect = userAnswerText === question.correctAnswer;

        if (isCorrect) {
            score++;
        }

        // إنشاء عنصر مراجعة السؤال
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('question-review-item');
        if (!isCorrect && userAnswerIndex !== null) { // إذا كانت خاطئة وتمت الإجابة عليها
            reviewItem.classList.add('wrong');
        } else if (userAnswerIndex === null) { // إذا لم يتم الإجابة عليها
            reviewItem.classList.add('unanswered');
        }

        reviewItem.innerHTML = `
            <p class="review-text"><strong>السؤال ${index + 1}:</strong> ${question.question}</p>
            <p class="review-text">إجابتك: <span class="${userAnswerIndex !== null ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered'}">${userAnswerText}</span></p>
            ${!isCorrect ? `<p class="review-text">الإجابة الصحيحة: <span class="correct">${question.correctAnswer}</span></p>` : ''}
            <div class="explanation-text">
                <strong>الشرح:</strong> <span class="explanation-content">${question.explanation}</span>
            </div>
        `;
        reviewContainer.appendChild(reviewItem);
    });

    // عرض النتيجة
    const totalQuestions = examQuestions.length;
    const percentage = (score / totalQuestions) * 100;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('scorePercentage').textContent = `${percentage.toFixed(2)}%`;
}

// Reset Exam function (دالة لإعادة الاختبار)
function resetExam() {
    currentQuestionIndex = 0;
    userAnswers = [];
    timeLeft = 0;
    clearInterval(timer); // التأكد من إيقاف المؤقت
    document.getElementById('timerDisplay').textContent = '30:00'; // إعادة ضبط عرض المؤقت
    document.getElementById('reviewContainer').innerHTML = ''; // مسح مراجعة النتائج
    document.getElementById('optionsContainer').innerHTML = ''; // مسح الخيارات
    // إخفاء زر الإنهاء إذا كان مرئياً
    document.getElementById('finishExam').style.display = 'none';

    // عرض الشاشة الرئيسية أو شاشة الاختبار (حسب رغبتك)
    showScreen('mainScreen');
}

// Initial screen setup (إعداد الشاشة الأولية عند تحميل الصفحة)
document.addEventListener('DOMContentLoaded', () => {
    showScreen('mainScreen'); // عرض الشاشة الرئيسية عند التحميل
});
