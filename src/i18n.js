import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n.use(LanguageDetector).use(initReactI18next).init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                greeting: "Your First Name",
                greetin: "Your Last Name",
                greeti: "Your Email",
                greet: "Your Password",
                gree: "repassword",
                gre: "Your Number Phone",
                youssef: "Your First Name is required",
                yousse: "Your LastName is requred",
                youss: "Your Email is required",
                yous: "Your Password is required",
                you: "Your Conforim Password is required",
                yo: "Your Number is required",
                lengthError: "Your field length should be between 2 and 11 characters",
                emailError: "Invalid email address",
                passwordError: "Password should be at least 8 characters long and contain at least one capital letter",
                repasswordError: "Passwords don't match",
                numberError: "Please enter a valid phone number",
                Enter1: "Enter Your First Name",
                Enter2: "Enter Your Last Name",
                Enter3: "Enter Your Password",
                Enter4: "Enter Your Conforim Password",
                Enter5: "Enter Your Number",
                Enter6: "Enter Your Email",
                Feature: "Features",
                tiredOfGoingToRestaurants: "Are you tired of going to restaurants? Let's see famous food delivery drivers now.",
                aboutUs: "About Us?",
                overview: "We provide an overview of Chinese food and everything you want to know",
                famousFoods: "The most famous foods and their ingredients",
                preparationSteps: "The way to prepare it is in good and simple steps",
                warning: "Warning",
                whatToKnow: "What we should know about Chinese food?",
                question1: "Why is Chinese food so popular worldwide",
                answer1: "Chinese food's popularity is due to its diverse flavors, balanced taste, and rich cultural significance. It offers a wide variety of dishes, including rice, noodles, meats, seafood, and vegetables, appealing to a broad audience. The use of various cooking methods like frying, steaming, and stir-frying enhances flavors and textures. This culinary diversity, coupled with the cultural importance of food in Chinese society, has made Chinese cuisine a favorite globally.",
                question2: "What are some key ingredients commonly used in Chinese cuisine",
                answer2: "Chinese cuisine utilizes a variety of key ingredients to create its distinctive flavors. Some common ingredients include soy sauce, ginger, garlic, green onions, and sesame oil. These ingredients are often used in combination to enhance the taste of dishes and contribute to the overall balance of flavors that Chinese food is known for. Additionally, spices such as Sichuan peppercorns, star anise, and dried chili peppers are frequently used to add heat and complexity to many dishes.",
                question3: "What is the extent of the spread of Chinese food outside China",
                answer3: "Chinese cuisine has achieved widespread popularity outside China, with Chinese restaurants found in almost every corner of the globe. The popularity of Chinese food can be attributed to its diverse flavors, adaptable nature, and cultural significance. From bustling metropolitan cities to small towns, people around the world enjoy dishes like stir-fries, noodles, and dumplings. Chinese restaurants often adapt their menus to suit local tastes while still maintaining some authentic flavors, making Chinese cuisine accessible and appealing to a wide range of people regardless of their cultural background.",
                "Your Company": "Your Company",
                "Features": "Features",
                "Marketplace": "Marketplace",
                "Company": "Company",
                "Log out": "Log out",
                "Welcome to Famous Chinese food.": "Welcome to Famous Chinese food.",
                "Welcome to Chinese food. Discover and learn about the most beautiful foods with us.": "Welcome to Chinese food. Discover and learn about the most beautiful foods with us.",
                "Product": "Product",
                "Log in": "Log in",
                "About us": "About us",
                "Community": "Community",
                "Foods made with 💖": "Foods made with 💖",
                "Call us": "Call us",
                "Contacts": "Contacts",
                "+30 011373746734": "+30 011373746734",
                "+30 0128590384": "+30 0128590384",
                "our Location": "Our Location",
                "Alexandria-Maime": "Alexandria-Maime",
                "Follow us": "Follow us",
                "company_description": "We are a company that appeared in 2012 in China, in Beijing. We trained on how to prepare Chinese food well and deliver it to the world.",
                "how_we_did_this": "How we did this?",
                "thinking": "thinking",
                "doing": "doing",
                "result": "result",
                "call_us_1": "If you have any modifications, do not hesitate",
                "call_us_2": "to call us on our numbers and",
                "call_us_3": "tell us what you think?",
                "our_team": "Our Team",
                "celebrity": "Celebrities come to our restaurant from all over world",
                welcome: "Welcome to our restaurant ❤",
                bestMeals: "We present the best meals of pizza and sweet 🍕&&🍨",
                totalPrice: "Total Price:",
                totalPricePizza: "Total price of pizza:",
                totalPriceBoth: "Your total price of pizza and dessert:",
                enterAddress: "Enter your address",
                sendOrder: "Send",
                orderSent: "Order sent successfully! Your order is coming to your house",
                "welcomee": "Welcome to our restaurant.",
                "orderPlacement": "Here you can place a delivery order. We wish you a delicious dining experience.",
                "visitAgain": "Don't forget to visit us again.",
                "pizzaDescription": "Welcome again to our restaurant, here you can order our delicious pizza.",
                "extraDessert": "and if you want to take an extra dessert order, here you are.",
                "lastUpdated": "Last updated 3 mins ago",
                go: "Go to sweet to complete purchase or finish",
                English: "Welcome to the best restaurants in Thailand.",
                w: "You have to Enter Your Address in the label",
                comments: "A wonderful experience. I recommend everyone to eat at this restaurant. A wonderful experience. I recommend everyone to eat at this restaurant.",
                clien: "our best comments clients",
                q: "Learn about our chefs.",
                ww: "How they cook food and serve us delicious meals.",
                e: "With the latest delicious and expensive ingredients.",
                r: "How they cook food and serve us delicious meals.",
                t: "Serving us delicious food.",
                register: "register",
                dont:"Are You Don't have account?"
            }
        },
        ar: {
            translation: {
                greeting: "اسم المستخدم الاول ",
                greetin: "اسم المستخدم الثاني",
                greeti: "الايميل",
                greet: "كلمة المرور",
                gree: "تاكيد كلمه المرور",
                gre: "رقم الهاتف",
                youssef: "الاسم الاول مطلوب ",
                yousse: "الاسمالثاني مطلوب ",
                youss: "الايميل مطلوب",
                yous: "كلمة المرور مطلوب",
                you: "تأكيد كلمه المرور مطلوبة",
                yo: "رقم الهاتف مطلوب",
                lengthError: "يجب أن يكون طول الحقل بين 2 و 11 حرفًا",
                emailError: "عنوان البريد الإلكتروني غير صحيح",
                passwordError: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل وتحتوي على حرف كبير واحد على الأقل",
                repasswordError: "كلمات المرور غير متطابقة",
                numberError: "الرجاء إدخال رقم هاتف صحيح",
                Feature: "سمات",
                tiredOfGoingToRestaurants: "هل أنت متعب من الذهاب إلى المطاعم؟ دعنا نرى سائقي توصيل الطعام المشهورين الآن.",
                aboutUs: "من نحن؟",
                overview: "نقدم لكم نظرة عامة على الطعام الصيني وكل ما ترغب في معرفته",
                famousFoods: "أشهر الأطعمة ومكوناتها",
                preparationSteps: "الطريقة الصحيحة لإعدادها في خطوات جيدة وبسيطة",
                warning: "تحذير",
                whatToKnow: "ما يجب أن نعرفه عن الطعام الصيني؟",
                question1: "لماذا يحظى الطعام الصيني بشعبية كبيرة عالمياً",
                answer1: "تعود شعبية الطعام الصيني إلى تنوع نكهاته ومذاقه المتوازن وأهميته الثقافية الغنية. يقدم مجموعة واسعة من الأطباق، بما في ذلك الأرز والمعكرونة واللحوم والمأكولات البحرية والخضروات، مما يجذب جمهوراً واسعاً. استخدام طرق الطهي المختلفة مثل القلي والبخار والقلي يعزز النكهات والملمس. هذا التنوع الطهي، جنباً إلى جنب مع الأهمية الثقافية للطعام في المجتمع الصيني، جعل من المأكولات الصينية مفضلة عالمياً.",
                question2: "ما هي بعض المكونات الرئيسية المستخدمة بشكل شائع في المطبخ الصيني",
                answer2: "يستخدم المطبخ الصيني مجموعة متنوعة من المكونات الرئيسية لإعطاء نكهاته المميزة. تشمل بعض المكونات الشائعة صلصة الصويا والزنجبيل والثوم والبصل الأخضر وزيت السمسم. غالبًا ما يتم استخدام هذه المكونات معًا لتعزيز طعم الأطباق والمساهمة في التوازن العام للنكهات التي يشتهر بها الطعام الصيني. بالإضافة إلى ذلك، يتم استخدام التوابل مثل فلفل سيتشوان ونجم اليانسون والفلفل الحار المجفف بشكل متكرر لإضافة الحرارة والتعقيد إلى العديد من الأطباق.",
                question3: "ما هو مدى انتشار الطعام الصيني خارج الصين",
                answer3: "حققت المأكولات الصينية شعبية واسعة خارج الصين، حيث يوجد مطاعم صينية في كل مكان تقريباً في العالم. يمكن تصور شعبية الطعام الصيني إلى تنوع نكهاته وطبيعته القابلة للتكيف وأهميته الثقافية. من المدن الكبرى النابضة بالحياة إلى البلدات الصغيرة، يستمتع الناس في جميع أنحاء العالم بأطباق مثل الستيروفات والمعكرونة والبطاطين. غالبًا ما تقوم المطاعم الصينية بتكييف قوائمها لتناسب الأذواق المحلية مع الحفاظ على بعض النكهات الأصيلة، مما يجعل المأكولات الصينية متاحة وملهمة لمجموعة واسعة من الناس بغض النظر عن خلفيتهم الثقافية.",
                "Your Company": "شركتك",
                "Features": "الميزات",
                "Marketplace": "السوق",
                "Company": "الشركة",
                "Log out": "تسجيل الخروج",
                "Welcome to Famous Chinese food.": "مرحبًا بك في المأكولات الصينية الشهيرة.",
                "Welcome to Chinese food. Discover and learn about the most beautiful foods with us.": "مرحبًا بك في المأكولات الصينية. اكتشف وتعلم عن أجمل الأطعمة معنا.",
                "Product": "المنتج",
                "Log in": "تسجيل الدخول",
                "About us": "معلومات عنا",
                "Community": "المجتمع",
                "Foods made with 💖": "الأطعمة المصنوعة بحب 💖",
                "Call us": "اتصل بنا",
                "Contacts": "جهات الاتصال",
                "+30 011373746734": "+30 011373746734",
                "+30 0128590384": "+30 0128590384",
                "our Location": "موقعنا",
                "Alexandria-Maime": "الإسكندرية-مايمي",
                "Follow us": "تابعنا",
                "company_description": "نحن شركة ظهرت في عام 2012 في الصين، في بكين. تدربنا على كيفية إعداد الطعام الصيني بشكل جيد وتوصيله للعالم.",
                "how_we_did_this": "كيف فعلنا ذلك؟",
                "thinking": "التفكير",
                "doing": "القيام",
                "result": "النتيجة",
                "call_us": "إذا كان لديك أي تعديلات، لا تتردد في الاتصال بنا على أرقامنا وإخبارنا برأيك؟",
                "our_team": "فريقنا",
                "company_description": "نحن شركة ظهرت في عام 2012 في الصين، في بكين. تدربنا على كيفية إعداد الطعام الصيني بشكل جيد وتوصيله للعالم.",
                "how_we_did_this": "كيف فعلنا ذلك؟",
                "thinking": "التفكير",
                "doing": "القيام",
                "result": "النتيجة",
                "call_us_1": "إذا كان لديك أي تعديلات، لا تتردد",
                "call_us_2": "في الاتصال بنا على أرقامنا و",
                "call_us_3": "إخبارنا برأيك؟",
                "our_team": "فريقنا",
                "celebrity": "مشاهير يأتون الي مطعمنا من جميع انجاء العالم",
                welcome: "مرحبًا بكم في مطعمنا ❤",
                bestMeals: "نقدم أفضل وجبات البيتزا والحلويات 🍕&&🍨",
                totalPrice: "السعر الإجمالي:",
                totalPricePizza: "إجمالي سعر البيتزا:",
                totalPriceBoth: "السعر الإجمالي للبيتزا والحلوى:",
                enterAddress: "أدخل عنوانك",
                sendOrder: "إرسال",
                orderSent: "تم إرسال الطلب بنجاح! طلبك في طريقه إلى منزلك",
                "welcomee": "مرحبًا بكم في مطعمنا.",
                "orderPlacement": "هنا يمكنكم تقديم طلب توصيل. نتمنى لكم تجربة طعام شهية.",
                "visitAgain": "لا تنسوا زيارتنا مرة أخرى.",
                "pizzaDescription": "مرحبًا مرة أخرى في مطعمنا، هنا يمكنكم طلب بيتزا لذيذة.",
                "extraDessert": "وإذا كنتم ترغبون في طلب حلوى إضافية، فأنتم في المكان الصحيح.",
                "lastUpdated": "تم التحديث قبل 3 دقائق",
                go: "انتقل إلى الحلويات لإتمام الشراء أو الانتهاء",
                Enter1: "أدخل اسمك الأول",
                Enter2: "أدخل اسمك الأخير",
                Enter3: "أدخل كلمة المرور الخاصة بك",
                Enter4: "أدخل تأكيد كلمة المرور الخاصة بك",
                Enter5: "أدخل رقمك",
                Enter6: "أدخل بريدك الإلكتروني",
                English: "مرحبًا بك في أفضل المطاعم في تايلاند.",
                w: "يجب عليك إدخال عنوانك في الحقل",
                comments: "تجربة رائعة. أوصي الجميع بتناول الطعام في هذا المطعم. تجربة رائعة. أوصي الجميع بتناول الطعام في هذا المطعم.",
                clien: "لدينا أفضل تعليقات العملاء",
                q: "تعرف على طهاةنا.",
                ww: "وكيف يطبخون الطعام ويقدمون لنا طعامًا لذيذًا.",
                e: "وبأحدث المكونات اللذيذة والغالية.",
                r: "وكيف يطبخون الطعام ويقدمون لنا طعامًا لذيذًا.",
                t: "ويقدمون لنا طعامًا لذيذًا.",
                register: "تسجيل",
                dont:"ليس لديك حساب "
            }
        },
        de: {
            translation: {
                greeting: "Dein Vorname",
                greetin: "Dein Nachname",
                greeti: "Deine E-Mail",
                greet: "Dein Passwort",
                gree: "Passwort bestätigen",
                gre: "Deine Telefonnummer",
                youssef: "Dein Vorname ist erforderlich",
                yousse: "Dein Nachname ist erforderlich",
                youss: "Deine E-Mail ist erforderlich",
                yous: "Dein Passwort ist erforderlich",
                you: "Passwort bestätigen ist erforderlich",
                yo: "Deine Telefonnummer ist erforderlich",
                lengthError: "Die Länge des Feldes sollte zwischen 2 und 11 Zeichen liegen",
                emailError: "Ungültige E-Mail-Adresse",
                passwordError: "Das Passwort muss mindestens 8 Zeichen lang sein und mindestens einen Großbuchstaben enthalten",
                repasswordError: "Passwörter stimmen nicht überein",
                numberError: "Bitte gib eine gültige Telefonnummer ein",
                Feature: "Eigenschaften",
                Marketplace: "Marktplatz",
                Company: "Unternehmen",
                Login: "Anmelden",
                tiredOfGoingToRestaurants: "Sind Sie müde, ins Restaurant zu gehen? Lassen Sie uns jetzt berühmte Essenslieferanten sehen.",
                aboutUs: "Über uns?",
                overview: "Wir bieten einen Überblick über chinesisches Essen und alles, was Sie wissen möchten",
                famousFoods: "Die berühmtesten Lebensmittel und ihre Zutaten",
                preparationSteps: "Der Weg, es zuzubereiten, ist in guten und einfachen Schritten",
                warning: "Warnung",
                whatToKnow: "Was sollten wir über chinesisches Essen wissen?",
                question1: "Warum ist chinesisches Essen weltweit so beliebt",
                answer1: "Die Beliebtheit des chinesischen Essens beruht auf seinen vielfältigen Aromen, seinem ausgewogenen Geschmack und seiner reichen kulturellen Bedeutung. Es bietet eine breite Palette von Gerichten, darunter Reis, Nudeln, Fleisch, Meeresfrüchte und Gemüse, die ein breites Publikum ansprechen. Die Verwendung verschiedener Kochmethoden wie Braten, Dämpfen und Anbraten verbessert die Aromen und Texturen. Diese kulinarische Vielfalt, gepaart mit der kulturellen Bedeutung von Essen in der chinesischen Gesellschaft, hat die chinesische Küche weltweit beliebt gemacht.",
                question2: "Welche sind einige wichtige Zutaten, die in der chinesischen Küche häufig verwendet werden",
                answer2: "Die chinesische Küche verwendet eine Vielzahl von wichtigen Zutaten, um ihre charakteristischen Aromen zu erzeugen. Einige häufig verwendete Zutaten sind Sojasauce, Ingwer, Knoblauch, Frühlingszwiebeln und Sesamöl. Diese Zutaten werden oft in Kombination verwendet, um den Geschmack der Gerichte zu verbessern und zum allgemeinen Gleichgewicht der Aromen beizutragen, für die die chinesische Küche bekannt ist. Darüber hinaus werden Gewürze wie Sichuan-Pfeffer, Sternanis und getrocknete Chilischoten häufig verwendet, um vielen Gerichten Schärfe und Komplexität zu verleihen.",
                question3: "Wie weit ist die Verbreitung chinesischer Küche außerhalb Chinas",
                answer3: "Die chinesische Küche hat außerhalb Chinas eine weit verbreitete Popularität erlangt, mit chinesischen Restaurants an fast jedem Ort der Welt. Die Beliebtheit des chinesischen Essens ist auf seine vielfältigen Aromen, seine anpassungsfähige Natur und seine kulturelle Bedeutung zurückzuführen. Von belebten Metropolen bis hin zu kleinen Städten genießen Menschen auf der ganzen Welt Gerichte wie Pfannengerichte, Nudeln und Teigtaschen. Chinesische Restaurants passen ihre Speisekarten oft an lokale Geschmäcker an, während sie dennoch einige authentische Aromen beibehalten, was die chinesische Küche für eine breite Palette von Menschen unabhängig von ihrer kulturellen Herkunft zugänglich und ansprechend macht.",
                "Your Company": "Ihre Firma",
                "Features": "Eigenschaften",
                "Marketplace": "Marktplatz",
                "Company": "Firma",
                "Log out": "Ausloggen",
                "Welcome to Famous Chinese food.": "Willkommen bei berühmtem chinesischem Essen.",
                "Welcome to Chinese food. Discover and learn about the most beautiful foods with us.": "Willkommen bei chinesischem Essen. Entdecken und lernen Sie die schönsten Speisen mit uns.",
                "Product": "Produkt",
                "Log in": "Einloggen",
                "About us": "Über uns",
                "Community": "Gemeinschaft",
                "Foods made with 💖": "Lebensmittel hergestellt mit 💖",
                "Call us": "Ruf uns an",
                "Contacts": "Kontakte",
                "+30 011373746734": "+30 011373746734",
                "+30 0128590384": "+30 0128590384",
                "our Location": "Unser Standort",
                "Alexandria-Maime": "Alexandria-Maime",
                "Follow us": "Folge uns",
                "company_description": "Wir sind ein Unternehmen, das 2012 in China, in Peking, gegründet wurde. Wir haben gelernt, wie man chinesisches Essen gut zubereitet und in die Welt liefert.",
                "how_we_did_this": "Wie haben wir das gemacht?",
                "thinking": "Denken",
                "doing": "Tun",
                "result": "Ergebnis",
                "call_us": "Wenn Sie Änderungen haben, zögern Sie nicht, uns anzurufen und uns Ihre Meinung mitzuteilen?",
                "our_team": "Unser Team",
                "company_description": "Wir sind ein Unternehmen, das 2012 in China, in Peking, gegründet wurde. Wir haben gelernt, wie man chinesisches Essen gut zubereitet und in die Welt liefert.",
                "how_we_did_this": "Wie haben wir das gemacht?",
                "thinking": "Denken",
                "doing": "Tun",
                "result": "Ergebnis",
                "call_us_1": "Wenn Sie Änderungen haben, zögern Sie nicht",
                "call_us_2": "uns anzurufen und",
                "call_us_3": "uns Ihre Meinung mitzuteilen?",
                "our_team": "Unser Team",
                "celebrity": "Prominente aus aller Welt kommen in unser Restaurant",
                welcomee: "Willkommen in unserem Restaurant ❤",
                bestMeals: "Wir präsentieren die besten Mahlzeiten aus Pizza und Süßem 🍕&&🍨",
                totalPrice: "Gesamtpreis:",
                totalPricePizza: "Gesamtpreis der Pizza:",
                totalPriceBoth: "Ihr Gesamtpreis für Pizza und Dessert:",
                enterAddress: "Geben Sie Ihre Adresse ein",
                sendOrder: "Senden",
                orderSent: "Bestellung erfolgreich gesendet! Ihre Bestellung kommt zu Ihnen nach Hause",
                "welcomee": "Willkommen in unserem Restaurant.",
                "orderPlacement": "Hier können Sie eine Lieferbestellung aufgeben. Wir wünschen Ihnen ein köstliches kulinarisches Erlebnis.",
                "visitAgain": "Vergessen Sie nicht, uns wieder zu besuchen.",
                "pizzaDescription": "Willkommen wieder in unserem Restaurant, hier können Sie unsere köstliche Pizza bestellen.",
                "extraDessert": "und wenn Sie zusätzlich eine Dessertbestellung aufgeben möchten, sind Sie hier richtig.",
                "lastUpdated": "Zuletzt vor 3 Minuten aktualisiert",
                go: "Allez aux desserts pour finaliser l'achat ou terminer",
                English: "Willkommen in den besten Restaurants in Thailand.",
                w: "Sie müssen Ihre Adresse in das Feld eingeben",
                comments: "tolle Erfahrung. Ich empfehle jedem, in diesem Restaurant zu essen. tolle Erfahrung. Ich empfehle jedem, in diesem Restaurant zu essen.",
                clien: "Unsere besten Kundenkommentare",
                q: "Erfahren Sie mehr über unsere Köche.",
                ww: "Wie sie Essen zubereiten und uns köstliche Mahlzeiten servieren.",
                e: "Mit den neuesten köstlichen und teuren Zutaten.",
                r: "Wie sie Essen zubereiten und uns köstliche Mahlzeiten servieren.",
                t: "Servieren uns köstliches Essen.",
                register: "registrieren",
                dont:"Sie haben kein Konto?"
            }
        },
        fr: {
            translation: {
                comments: "belle expérience. Je recommande à tout le monde de manger dans ce restaurant. belle expérience. Je recommande à tout le monde de manger dans ce restaurant.",
                clien: 'nos meilleurs commentaires clients',
                greeting: "Votre prénom",
                greetin: "Votre nom de famille",
                greeti: "Votre email",
                greet: "Votre mot de passe",
                gree: "Reconfirmer le mot de passe",
                gre: "Votre numéro de téléphone",
                youssef: "Votre prénom est requis",
                yousse: "Votre nom de famille est requis",
                youss: "Votre email est requis",
                yous: "Votre mot de passe est requis",
                you: "La confirmation de votre mot de passe est requise",
                yo: "Votre numéro est requis",
                lengthError: "La longueur de votre champ doit être comprise entre 2 et 11 caractères",
                emailError: "Adresse email invalide",
                passwordError: "Le mot de passe doit comporter au moins 8 caractères et contenir au moins une lettre majuscule",
                repasswordError: "Les mots de passe ne correspondent pas",
                numberError: "Veuillez saisir un numéro de téléphone valide",
                Feature: "Caractéristiques",
                Marketplace: "Place de marché",
                Company: "Entreprise",
                Login: "Se connecter",
                tiredOfGoingToRestaurants: "Êtes-vous fatigué d'aller au restaurant? Voyons maintenant les célèbres livreurs de nourriture.",
                aboutUs: "À propos de nous?",
                overview: "Nous offrons un aperçu de la cuisine chinoise et tout ce que vous voulez savoir",
                famousFoods: "Les aliments les plus célèbres et leurs ingrédients",
                preparationSteps: "La façon de le préparer est en bonnes et simples étapes",
                warning: "Attention",
                whatToKnow: "Que devrions-nous savoir sur la cuisine chinoise?",
                question1: "Pourquoi la cuisine chinoise est-elle si populaire dans le monde entier",
                answer1: "La popularité de la cuisine chinoise est due à ses saveurs diverses, son goût équilibré et sa riche signification culturelle. Elle offre une large variété de plats, notamment du riz, des nouilles, de la viande, des fruits de mer et des légumes, qui attirent un large public. L'utilisation de différentes méthodes de cuisson comme la friture, la cuisson à la vapeur et le sauté améliore les saveurs et les textures. Cette diversité culinaire, associée à l'importance culturelle de la nourriture dans la société chinoise, a fait de la cuisine chinoise une favorite dans le monde entier.",
                question2: "Quels sont quelques ingrédients clés couramment utilisés dans la cuisine chinoise",
                answer2: "La cuisine chinoise utilise une variété d'ingrédients clés pour créer ses saveurs distinctives. Certains ingrédients courants comprennent la sauce soja, le gingembre, l'ail, les oignons verts et l'huile de sésame. Ces ingrédients sont souvent utilisés en combinaison pour améliorer le goût des plats et contribuer à l'équilibre général des saveurs pour lesquelles la cuisine chinoise est connue. De plus, des épices telles que le poivre de Sichuan, l'anis étoilé et les piments séchés sont fréquemment utilisés pour ajouter de la chaleur et de la complexité à de nombreux plats.",
                question3: "Quelle est l'étendue de la propagation de la cuisine chinoise en dehors de la Chine",
                answer3: "La cuisine chinoise a connu une popularité généralisée en dehors de la Chine, avec des restaurants chinois présents dans presque tous les coins du globe. La popularité de la cuisine chinoise peut être attribuée à ses saveurs diverses, sa nature adaptable et sa signification culturelle. Des grandes villes animées aux petites villes, les gens du monde entier apprécient des plats comme les sautés, les nouilles et les dumplings. Les restaurants chinois adaptent souvent leurs menus pour répondre aux goûts locaux tout en conservant certaines saveurs authentiques, rendant la cuisine chinoise accessible et attrayante pour un large éventail de personnes, quel que soit leur origine culturelle.",
                "Your Company": "Votre entreprise",
                "Features": "Caractéristiques",
                "Marketplace": "Place de marché",
                "Company": "Société",
                "Log out": "Se déconnecter",
                "Welcome to Famous Chinese food.": "Bienvenue dans la célèbre cuisine chinoise.",
                "Welcome to Chinese food. Discover and learn about the most beautiful foods with us.": "Bienvenue dans la cuisine chinoise. Découvrez et apprenez les plus beaux plats avec nous.",
                "Product": "Produit",
                "Log in": "Se connecter",
                "About us": "À propos de nous",
                "Community": "Communauté",
                "Foods made with 💖": "Aliments fabriqués avec 💖",
                "Call us": "Appelez-nous",
                "Contacts": "Contacts",
                "+30 011373746734": "+30 011373746734",
                "+30 0128590384": "+30 0128590384",
                "our Location": "Notre emplacement",
                "Alexandria-Maime": "Alexandria-Maime",
                "Follow us": "Suivez-nous",
                "company_description": "Nous sommes une entreprise apparue en 2012 en Chine, à Pékin. Nous nous sommes formés à la préparation de la cuisine chinoise et à sa livraison dans le monde entier.",
                "how_we_did_this": "Comment avons-nous fait cela?",
                "thinking": "réflexion",
                "doing": "action",
                "result": "résultat",
                "call_us": "Si vous avez des modifications, n'hésitez pas à nous appeler et à nous dire ce que vous en pensez?",
                "our_team": "Notre équipe",
                "company_description": "Nous sommes une entreprise apparue en 2012 en Chine, à Pékin. Nous nous sommes formés à la préparation de la cuisine chinoise et à sa livraison dans le monde entier.",
                "how_we_did_this": "Comment avons-nous fait cela?",
                "thinking": "réflexion",
                "doing": "action",
                "result": "résultat",
                "call_us_1": "Si vous avez des modifications, n'hésitez pas",
                "call_us_2": "à nous appeler et",
                "call_us_3": "à nous dire ce que vous en pensez?",
                "our_team": "Notre équipe",
                "celebrity": "Des célébrités viennent dans notre restaurant du monde entier",
                welcomee: "Bienvenue dans notre restaurant ❤",
                bestMeals: "Nous présentons les meilleurs repas de pizza et de sucreries 🍕&&🍨",
                totalPrice: "Prix total :",
                totalPricePizza: "Prix total de la pizza :",
                totalPriceBoth: "Votre prix total de pizza et de dessert :",
                enterAddress: "Entrez votre adresse",
                sendOrder: "Envoyer",
                orderSent: "Commande envoyée avec succès! Votre commande arrive chez vous",
                "welcome": "Bienvenue dans notre restaurant.",
                "orderPlacement": "Ici, vous pouvez passer une commande de livraison. Nous vous souhaitons une expérience culinaire délicieuse.",
                "visitAgain": "N'oubliez pas de nous rendre visite à nouveau.",
                "pizzaDescription": "Bienvenue à nouveau dans notre restaurant, ici vous pouvez commander notre délicieuse pizza.",
                "extraDessert": "et si vous voulez prendre une commande de dessert supplémentaire, vous êtes au bon endroit.",
                "lastUpdated": "Dernière mise à jour il y a 3 minutes",
                go: "Allez aux desserts pour finaliser l'achat ou terminer",
                Enter1: "Entrez votre prénom",
                Enter2: "Entrez votre nom de famille",
                Enter3: "Entrez votre mot de passe",
                Enter4: "Entrez la confirmation de votre mot de passe",
                Enter5: "Entrez votre numéro",
                Enter6: "Entrez votre email",
                English: "Bienvenue dans les meilleurs restaurants en Thaïlande.",
                w: "Vous devez entrer votre adresse dans le champ",
                q: "Apprenez à connaître nos chefs.",
                ww: "Comment ils cuisinent la nourriture et nous servent des repas délicieux.",
                e: "Avec les ingrédients délicieux et coûteux les plus récents.",
                r: "Comment ils cuisinent la nourriture et nous servent des repas délicieux.",
                t: "Nous servant de la nourriture délicieuse.",
                register: "s'inscrire",
                dont:"Vous n'avez pas de compte ?"

            }
        }
    }
}

);




