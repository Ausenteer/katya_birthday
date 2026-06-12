export type PredictionIcon = 'cake' | 'gift' | 'star' | 'chart' | 'bolt' | 'sea';

export const birthdayGirl = {
  name: 'Катя',
  title: 'BI Analyst',
  location: 'Limassol',
  company: 'Servers.com',
  nickname: 'Екатерина Хардворковна',
  favoriteComposer: 'Hans Zimmer',
};

export const sections = [
  { id: 'hero', label: 'Главная', number: '01' },
  { id: 'cards', label: 'Карты', number: '02' },
  { id: 'dashboard', label: 'Дашборд', number: '03' },
  { id: 'love', label: 'Любим', number: '04' },
  { id: 'greetings', label: 'Поздравления', number: '05' },
  { id: 'final', label: 'Финал', number: '06' },
];

export const moodMessages = {
  magic: 'Магия включена: золотые искры уже собирают для тебя лучший год.',
  memes: 'Мемный режим: quick question временно запрещён Вселенной.',
  love: 'Режим любви: три подруги официально подтверждают, что ты невероятная.',
  dashboard: 'Dashboard mode: все важные метрики сегодня в твою пользу.',
};

export const predictions = [
  {
    id: 'instant-yes',
    number: 'I',
    arcana: 'The Instant Yes',
    title: 'Аркан филиппинского балета',
    icon: 'cake' as PredictionIcon,
    text:
      'Карта мгновенного согласия. Ты всегда соглашаешься на любые активности, а уже потом смотришь, куда вписалась. Предсказание: все авантюры этого года окажутся удачными. Проверять, как обычно, будешь по факту.',
  },
  {
    id: 'gift-master',
    number: 'II',
    arcana: 'The Gift Master',
    title: 'Аркан дарительницы',
    icon: 'star' as PredictionIcon,
    text:
      'Карта редкого дара. Наука не может объяснить, как ты придумываешь подарки, поэтому записываем в магию. Предсказание: в этом году тебя будут удивлять так же точно, как умеешь только ты. Ну, или хотя бы очень постараются.',
  },
  {
    id: 'bi-goddess',
    number: 'III',
    arcana: 'The Abundance',
    title: 'Аркан изобилия',
    icon: 'chart' as PredictionIcon,
    text:
      'Перед тобой карта ясности, структуры и красивых инсайтов. Все важные метрики растут — как и деньги на твоих счетах. Корица по четвергам, бейлис по пятницам. В этой жизни всё к твоим ногам.',
  },
  {
    id: 'rare-luck',
    number: 'IV',
    arcana: 'The Lucky One',
    title: 'Аркан редкой удачи',
    icon: 'sea' as PredictionIcon,
    text:
      'Тебе попалась та самая карта, одна на миллион, которая РЕАЛЬНО ПРЕДСКАЗЫВАЕТ, а не переливает из пустого в порожнее. Чётко и без сносок мелким шрифтом: удача на твоей стороне. Статистическая значимость подтверждена.',
  },
  {
    id: 'five-lessons',
    number: 'V',
    arcana: 'The Hard Skills',
    title: 'Аркан твёрдых навыков',
    icon: 'bolt' as PredictionIcon,
    text:
      'Пять уроков английского в неделю это уже не хобби, это вторая работа. Предсказание: к концу года англичане начнут переспрашивать у тебя, как правильно сказать.',
  },
  {
    id: 'three-friends',
    number: 'VI',
    arcana: 'The Three Friends',
    title: 'Аркан трёх подруг',
    icon: 'gift' as PredictionIcon,
    text:
      'Самый тёплый аркан расклада. Что бы ни показывал дашборд жизни, рядом есть люди, которые считают тебя невероятной, любят и всегда готовы напомнить, что ты подарок этому миру.',
  },
];

export const kpis = [
  { label: 'Kindness Index', value: '150%', caption: 'Стабильно выше рынка' },
  { label: 'Beauty Score', value: '∞', caption: 'Метрика не помещается в стандартный формат' },
  { label: 'Hardwork Level', value: '999+', caption: 'Екатерина Хардворковна mode: active' },
  { label: 'Friendship Value', value: 'priceless', caption: 'Не поддаётся оценке, но точно растёт' },
  { label: 'Kinder Fuel', value: 'Full tank', caption: 'Резерв бегемотиков пополнен и ждёт нужного момента' },
  { label: 'Storytelling Level', value: 'Legendary', caption: 'История про киприотов и трубу затребована на бис' },
];

export const chartBars = [
  { label: 'Work-hard-play-hard', value: 110 },
  { label: 'Rest', value: 48 },
  { label: 'Joy', value: 55 },
  { label: 'Love from us', value: 300 },
];

export const migrationStops = [
  { place: 'пгт Грибановский', note: 'точка отсчёта', isHome: false },
  { place: 'Москва', note: 'Общежитие ГУУ 🌆 → Борисовские пруды 🌳', isHome: false },
  { place: 'Шри-Ланка', note: 'уже почувствовала островную жизнь, но что-то не то', isHome: false },
  { place: 'Турция', note: 'ещё теплее', isHome: false },
  { place: 'Грузия', note: 'снова многоэтажки. в этом ли счастье?', isHome: false },
  { place: 'Кипр', note: 'кажется, твоя остановочка', isHome: true },
];

export type MetricMark = 'check' | 'heart' | 'butterfly';

export const metrics: { metric: string; status: string; mark: MetricMark }[] = [
  { metric: 'Умение разобраться в хаосе', status: 'Excellent', mark: 'check' },
  { metric: 'Красивые образы', status: 'Always on', mark: 'check' },
  { metric: 'Поддержка подруг', status: 'Unlimited', mark: 'heart' },
  { metric: 'Уровень ответственности', status: 'Too high, please reduce', mark: 'check' },
  { metric: 'Уровень токсичности', status: '−−−∞', mark: 'butterfly' },
  { metric: 'Способность быть прекрасной', status: 'Confirmed', mark: 'heart' },
];

export const dressUpPresets = [
  {
    id: 'work-mode',
    title: 'Work Mode',
    description: 'Для дня, когда нужно спасти дашборд, ответить на 37 вопросов и всё равно выглядеть прекрасно.',
    items: ['Свитер с лимонами', 'Чёрные брюки', 'Ноутбук', 'Бейджик Servers.com', 'Кружка кофе'],
    background: 'Office dashboard',
    mood: 'Екатерина Хардворковна, но с надеждой на отдых',
    emoji: '🍋',
    accent: 'lemon',
    message:
      'Образ активирован: Екатерина Хардворковна готова закрывать задачи, но мы официально рекомендуем ей сделать перерыв.',
    special:
      'Легендарный свитер с лимонами выбран. Уровень узнаваемости: 100%. Уровень милоты: выше нормы.',
  },
  {
    id: 'limassol-sunset',
    title: 'Limassol Sunset',
    description: 'Для прогулки у моря, красивого света и вечера, где никто не пишет "quick question".',
    items: ['Лёгкое платье', 'Солнечные очки', 'Маленькая сумка', 'Босоножки', 'Кофе to go'],
    background: 'Limassol sea',
    mood: 'Limassol Relax',
    emoji: '🌊',
    accent: 'sea',
    message: 'Образ активирован: море рядом, волосы красиво лежат, жизнь наконец-то выглядит как надо.',
    special: 'Limassol mode activated. Все проблемы временно выглядят менее серьёзными.',
  },
  {
    id: 'birthday-queen',
    title: 'Birthday Queen',
    description: 'Для момента, когда все метрики говорят одно: сегодня Катя главная.',
    items: ['Нарядное платье', 'Золотые украшения', 'Мини-корона', 'Шарики', 'Торт'],
    background: 'Birthday candles',
    mood: 'Birthday Queen',
    emoji: '♕',
    accent: 'queen',
    message: 'Образ активирован: красота зашкаливает, dashboard не справляется с визуализацией.',
    special: 'Корона добавлена. Вообще-то она была там всегда, просто теперь её видно.',
  },
  {
    id: 'zimmer-epic-mode',
    title: 'Zimmer Epic Mode',
    description: 'Для выхода, под который точно должен играть Hans Zimmer.',
    items: ['Total black look', 'Dramatic coat', 'Золотой аксессуар', 'Cinematic light'],
    background: 'Cinematic Zimmer sky',
    mood: 'Epic Zimmer',
    emoji: 'ϟ',
    accent: 'zimmer',
    message: 'Образ активирован: камера медленно приближается, музыка нарастает, впереди великая сцена.',
    special: 'Эпичность увеличена. Обычный выход из комнаты теперь выглядит как финальная сцена фильма.',
  },
  {
    id: 'cozy-no-meetings',
    title: 'Cozy No Meetings Day',
    description: 'Для редкого, но прекрасного дня без созвонов, дедлайнов и "можно быстро спросить?".',
    items: ['Oversized sweater', 'Мягкие штаны', 'Плед', 'Чай', 'Книга'],
    background: 'Cozy home',
    mood: 'No Meetings Please',
    emoji: '☕',
    accent: 'cozy',
    message: 'Образ активирован: Катя unavailable. Причина: заслуженный отдых.',
    special: 'Плед добавлен. Система рекомендует: не трогать Катю минимум 2 часа.',
  },
];

export const loveReasons = [
  'За то, что рядом с тобой спокойно и тепло.',
  'За твой ум - тот самый, который видит структуру даже там, где остальные видят хаос.',
  'За красоту, которая не только внешняя, но и в том, как ты относишься к людям.',
  'За доброту, которую ты не демонстрируешь специально, но её всегда видно.',
  'За то, что ты умеешь много работать, но при этом остаёшься живым, нежным и настоящим человеком.',
  'За твой вкус, эстетику и способность делать всё красиво.',
  'За то, что с тобой хочется дружить, смеяться, обсуждать жизнь и просто быть рядом.',
  'За то, что ты - Катя. И этого уже достаточно.',
];

export const greetings = [
  {
    from: 'Имя 1',
    text:
      'Катя, с днём рождения! Ты невероятно умная, красивая и тёплая. Мне очень повезло работать рядом с тобой и знать тебя не только как коллегу, но и как человека, с которым можно смеяться, делиться, обсуждать всё на свете и чувствовать поддержку. Пусть в этом году у тебя будет больше лёгкости, радости, моря, красивых вечеров и моментов, когда ты просто счастлива.',
  },
  {
    from: 'Имя 2',
    text:
      'Наша Екатерина Хардворковна, поздравляю! Желаю тебе, чтобы работа уважала твои границы, таски закрывались сами, дашборды строились без боли, а жизнь за пределами календаря была яркой, вкусной и красивой. Ты очень классная. Очень.',
  },
  {
    from: 'Имя 3',
    text:
      'Катя, ты человек, который делает пространство вокруг лучше. С тобой спокойно, интересно и тепло. Ты умная, сильная, красивая и очень настоящая. Пусть новый год жизни будет как музыка Циммера: масштабный, красивый, вдохновляющий и с ощущением, что впереди что-то большое и прекрасное.',
  },
];

export const trackList = [
  'The Dashboard Rises',
  'No More Urgent Tasks',
  'Limassol Sunset',
  'Three Friends Theme',
  'Екатерина Хардворковна: Final Boss',
];

export const limassolWishes = [
  ['Море', 'чаще'],
  ['Солнце', 'мягче'],
  ['Работы', 'меньше'],
  ['Красивых платьев', 'больше'],
  ['Поводов улыбаться', 'ежедневно'],
];
