   <!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>عقل الكون - من تصميم محمد الشريف</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #0d0d1e;
            color: #e0e0e0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            text-align: center;
            overflow: hidden;
            position: relative;
        }

        body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(20,20,40,0.8) 0%, rgba(50,50,80,0.8) 100%);
            z-index: -2;
        }

        body::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at center, rgba(0, 200, 255, 0.2) 0%, rgba(0, 200, 255, 0) 50%),
                        radial-gradient(circle at top right, rgba(255, 100, 200, 0.2) 0%, rgba(255, 100, 200, 0) 50%);
            animation: nebulaEffect 20s infinite alternate ease-in-out;
            z-index: -1;
        }

        @keyframes nebulaEffect {
            0% { transform: scale(1) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.1) rotate(15deg); opacity: 0.8; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        .page {
            background-color: rgba(10, 10, 30, 0.95);
            padding: 35px;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 255, 255, 0.3);
            max-width: 90%;
            width: 100%;
            box-sizing: border-box;
            animation: popIn 0.8s ease-out forwards;
            border: 1px solid rgba(0, 255, 255, 0.2);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease-in-out;
            display: flex; /* Added for correct centering of content */
            flex-direction: column; /* Added for correct centering of content */
            justify-content: center; /* Added for correct centering of content */
            align-items: center; /* Added for correct centering of content */
        }

        .page.active {
            opacity: 1;
            pointer-events: auto;
        }

        @keyframes popIn {
            from { opacity: 0; transform: scale(0.8) translateY(-30px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }

        h1 {
            color: #00eaff;
            font-size: 2.8em;
            margin-bottom: 18px;
            text-shadow: 0 0 15px rgba(0, 255, 255, 0.8), 0 0 25px rgba(0, 255, 255, 0.5);
            font-weight: bold;
        }

        p {
            font-size: 1.2em;
            line-height: 1.7;
            margin-bottom: 30px;
            color: #b0e0e6;
            font-weight: 300;
        }

        .action-button {
            background-color: #ff3366;
            color: white;
            padding: 16px 35px;
            border: none;
            border-radius: 50px;
            font-size: 1.3em;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease, filter 0.3s ease;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
            letter-spacing: 1px;
            filter: brightness(100%);
        }

        .action-button:hover {
            background-color: #e6004c;
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 51, 102, 0.7);
            filter: brightness(120%);
        }

        .action-button:active {
            transform: translateY(0);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
            filter: brightness(90%);
        }

        .message-box {
            margin-top: 25px;
            padding: 20px;
            background-color: rgba(255, 200, 0, 0.15);
            border-left: 5px solid #ffcc00;
            border-radius: 12px;
            color: #ffe599;
            font-size: 1.1em;
            text-align: right;
        }

        #ideaDisplay {
            margin-top: 30px;
            padding: 20px;
            background-color: rgba(0, 150, 150, 0.15);
            border-radius: 12px;
            border: 1px solid rgba(0, 200, 200, 0.4);
            min-height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.3em;
            font-weight: bold;
            color: #99ffff;
            box-shadow: 0 0 15px rgba(0, 200, 200, 0.3);
            transition: all 0.3s ease-in-out;
            text-align: center;
        }

        .intro-text-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 1.8em;
            font-weight: bold;
            text-shadow: 0 0 15px #00eaff, 0 0 25px #00eaff;
            opacity: 0;
            animation: showAndFade 3s ease-out forwards;
            z-index: 10;
            pointer-events: none;
        }

        @keyframes showAndFade {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        .footer-hint {
            font-size: 0.85em;
            color: #8899aa;
            margin-top: 20px;
            text-shadow: 0 0 5px rgba(0, 255, 255, 0.1);
        }
    </style>
</head>
<body>

    <div class="intro-text-overlay" id="loadingText">
        محمد الشريف يُنشئ 'عقل الكون'...
    </div>

    <div id="page1" class="page">
        <h1>مرحباً بكم في بُعد جديد من الإبداع!</h1>
        <p>هذا ليس مجرد تطبيق، بل هو رسالة مني إليكم، يا أصدقائي الأعزاء.</p>
        <p>لقد صُمم هذا من شاشة هاتفي المتواضعة، ليثبت لكم أن **العزيمة والطموح قادران على صنع المستحيل.**</p>
        <p>أقدر كل لحظة صداقة وقدركم كبير في قلبي. والآن، دعونا نرى ما يخبئه المستقبل لنا معًا!</p>
        <button class="action-button" onclick="showPage(2)">انطلق نحو المجهول بلمسة!</button>
        <p class="footer-hint" style="margin-top: 35px;">بالمناسبة، هذا التطبيق هو أول إبداع من عقل **محمد الشريف**.</p>
    </div>

    <div id="page2" class="page">
        <div class="message-box">
            <p><strong>الـ AI يبتسم بخبث:</strong> أحسنت! فضولك قادك إلى حيث القوة الحقيقية. تذكر، هذا ليس مجرد تطبيق، بل هو <strong>مولد الأفكار الكونية</strong> الخاص بهذا العقل العظيم. أهلاً بك في عالمي!</p>
            <p>اضغط على الزر أدناه ودع عالمك يتلقى جرعة من الإلهام أو التحدي اليومي. كل فكرة هي خطوة نحو تحقيق المستحيل.</p>
        </div>

        <div id="ideaDisplay">
            اضغط على الزر لتوليد فكرتك الكونية الأولى!
        </div>

        <button class="action-button" onclick="generateIdea()" style="margin-top: 25px; background-color: #00b894;">ولّد فكرة كونية جديدة!</button>
        <button class="action-button" onclick="showPage(1)" style="margin-top: 15px; background-color: #6633ff;">العودة بذاكرة الإبداع!</button>
        <p class="footer-hint">تم إطلاق هذا "العقل الكوني" على يد **محمد الشريف**.</p>
    </div>

    <script>
        const cosmicIdeas = [
            "تحدي: قم بتدوين 3 أشياء أنت ممتن لها اليوم.",
            "فكرة إبداعية: حاول أن تكتب قصيدة قصيرة (حتى لو كانت سطرين) عن الحياة أو الكون.",
            "مهمة اليوم: اتصل بشخص لم تتحدث إليه منذ فترة طويلة واطمئن عليه.",
            "تحدي: تعلم 5 كلمات جديدة من لغة أجنبية وابحث عن معناها.",
            "فكرة: صمم رسمة بسيطة أو خربشة تعبر عن مشاعرك الحالية.",
            "مهمة: خصص 15 دقيقة للتأمل في صمت أو الاستماع لموسيقى هادئة.",
            "تحدي: حاول فهم مبدأ علمي بسيط (مثل كيف تعمل الجاذبية أو الكهرباء).",
            "فكرة: سجل رسالة صوتية لنفسك في المستقبل، تتحدث فيها عن أحلامك.",
            "مهمة: تعلم مهارة يدوية بسيطة جداً (مثل عقدة حبل أو طي ورقة بشكل معين).",
            "تحدي: فكر في مشكلة تواجهك وحاول أن تجد 3 حلول إبداعية لها."
        ];

        function generateIdea() {
            const randomIndex = Math.floor(Math.random() * cosmicIdeas.length);
            document.getElementById("ideaDisplay").innerText = cosmicIdeas[randomIndex];
            const ideaBox = document.getElementById("ideaDisplay");
            ideaBox.style.transform = "scale(0.9)";
            setTimeout(() => {
                ideaBox.style.transform = "scale(1)";
            }, 100);
        }

        function showPage(pageNumber) {
            const page1 = document.getElementById("page1");
            const page2 = document.getElementById("page2");

            if (pageNumber === 1) {
                page2.classList.remove('active');
                page1.classList.add('active');
            } else if (pageNumber === 2) {
                page1.classList.remove('active');
                page2.classList.add('active');
            }
        }

        window.onload = function() {
            document.getElementById("loadingText").style.animation = "showAndFade 3s ease-out forwards";
            
            // Hide pages initially by default CSS (opacity: 0, pointer-events: none)
            // Show page1 after loading text fades
            setTimeout(() => {
                showPage(1); // Make page1 active
            }, 2500);
        };
    </script>
</body>
</html>
