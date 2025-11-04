import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const neuroBots = [
  { name: "стоматология", url: "https://t.me/New_DentalClinic_bot", icon: "Stethoscope" },
  { name: "ремонт оборудования", url: "https://t.me/sellstuff_na_bot", icon: "Wrench" },
  { name: "окна и балконы", url: "https://t.me/New_window_Installation_Bot", icon: "Home" },
  { name: "мануальный терапевт", url: "https://t.me/New_Chiropractic_clinic_Bot", icon: "Hand" },
  { name: "франшиза", url: "https://t.me/franchise_seller_bot", icon: "Building" },
  { name: "косметика оптом", url: "https://t.me/cosmetics_na_bot", icon: "Sparkles" },
  { name: "HR", url: "https://t.me/hr_neuroagents_bot", icon: "Users" },
  { name: "техподдержка", url: "https://t.me/sup_neuroagents_bot", icon: "Headphones" },
  { name: "недвижимость", url: "https://t.me/New_real_estate_sale_bot", icon: "Building2" },
  { name: "юристы банкротство", url: "https://t.me/Provision_of_legal_services_bot", icon: "Scale" },
  { name: "мебель на заказ", url: "https://t.me/New_furniture_sales_bot", icon: "Sofa" },
  { name: "стратегические сессии", url: "https://t.me/Strategic_sessions_bot", icon: "Target" }
];

const caseResults = [
  { business: "Доставка пиццы", result: "+364 000 ₽ в месяц" },
  { business: "Салон красоты", result: "+30% продаж за 1 месяц" },
  { business: "Земельные участки", result: "+1,5 млн ₽ за 24 дня" },
  { business: "Остекление окон", result: "-6 менеджеров, всё закрывает бот" },
  { business: "Строительное оборудование", result: "Рост конверсии с 10% до 60%" },
  { business: "Межгород перевозки", result: "Отвечает мгновенно, конверсия ×3" },
];

const socialLinks = [
  { name: "VK", url: "https://vk.com/neuro_progressor", icon: "ExternalLink", logo: "🟦" },
  { name: "Дзен", url: "https://dzen.ru/neuro_progressor", icon: "ExternalLink", logo: "🟡" },
  { name: "RuTube", url: "https://rutube.ru/channel/67537775/", icon: "Video", logo: "📺" },
  { name: "TikTok", url: "https://www.tiktok.com/@neuro_progressor_hr", icon: "Music", logo: "🎵" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCBNdES0BBDkL-esp18t9AgQ", icon: "Play", logo: "🔴" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20"></div>
        <img 
          src="/img/c3c2d85f-3270-4a90-9049-688ddc56c757.jpg" 
          alt="Neural Network Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Нейропродавцы для вашего бизнеса — внедряю лично, под ключ
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
                Не просто бот. А персональный ассистент, который продаёт, обрабатывает заявки и общается за вас 24/7 — как будто вы сами.
              </p>
              <p className="text-lg md:text-xl mb-8 text-accent">
                Хватит тянуть на себе всё. Пусть роботы работают, а вы — управляете.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-gradient-primary hover:opacity-90 border border-primary/20 glow-effect transition-all duration-300"
                onClick={() => window.open('https://t.me/valeryka76', '_blank')}
              >
                <Icon name="Zap" className="mr-2" />
                Хочу в кейс
              </Button>
            </div>
            
            <div className="flex-1 lg:flex-initial">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/files/50f1d2b3-4cf8-4ac2-b3bf-0f3f0e359c7e.jpg" 
                  alt="Валерия Кравченко" 
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/25 transform scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goal */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-primary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                  Цель проекта
                </Badge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Я ищу 3 проекта для создания демонстрационных кейсов
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Вы получаете цену ниже рынка в 3–5 раз, я — витринные результаты и отзывы.
                  </p>
                  <h3 className="text-2xl font-heading font-bold text-accent mb-4">
                    Замените дармоедов на ИИ.
                  </h3>
                </div>
                <div className="flex justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Neuro Employee Does */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Что делает нейросотрудник
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "Clock", title: "Приветствует клиента 24/7", desc: "Никогда не спит, всегда готов помочь" },
              { icon: "ShoppingBag", title: "Подбирает, объясняет, продаёт", desc: "Консультирует как опытный менеджер" },
              { icon: "MessageCircle", title: "Вежливо дожимает", desc: "Следит за воронкой продаж" },
              { icon: "TrendingUp", title: "Заменяет до 70% функций отдела продаж", desc: "Освобождает время для важных задач" },
              { icon: "Calendar", title: "Работает без отпусков и больничных", desc: "Стабильная работа круглый год" },
              { icon: "Users", title: "Живой диалог остаётся за людьми", desc: "ИИ + человек = идеальная команда" }
            ].map((item, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <Icon name={item.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            А ваш персонал пусть занимается тем, что действительно важно — живым диалогом («а поговорить?»), нестандартными задачами и развитием.
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Результаты использования нейро продавца
            </h2>
            <p className="text-lg text-muted-foreground mb-8">(для вдохновения)</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {caseResults.map((result, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-3 text-accent">{result.business}</h3>
                  <p className="text-2xl font-bold text-primary">{result.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-muted/20 rounded-2xl p-8">
            <p className="text-lg mb-4">Это чужие кейсы. Хочу создать свои.</p>
            <p className="text-2xl font-heading font-bold text-primary">
              Может, вы станете одним из первых?
            </p>
          </div>
        </div>
      </section>

      {/* Examples of Ready Bots */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Примеры готовых нейро продавцов
            </h2>
            <p className="text-lg text-muted-foreground">
              Примеры из разных ниш. Можно их погонять, как будто вы потенциальный клиент.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {neuroBots.map((bot, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/50 transition-all group"
                onClick={() => window.open(bot.url, '_blank')}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform">
                    <Icon name={bot.icon} className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-center">{bot.name}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <Card className="max-w-6xl mx-auto bg-card/50 backdrop-blur-sm border border-primary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <Badge variant="outline" className="mb-4 text-accent border-accent/30">
                    Обо мне
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                    Валерия Кравченко
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground">
                    HRBP, архитектор бизнес-систем, визуализатор, стратег. Эксперт по оптимизации бизнес-процессов и внедрению ИИ с более чем 20-летним опытом.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Icon name="Briefcase" className="w-5 h-5 text-primary mt-1" />
                      <p className="text-sm">
                        <strong>Опыт:</strong> 20+ лет в HR и бизнес-процессах, работала с ВНИИХОЛОДМАШ и Гроссмарт. 
                        Достигла сокращения сроков процессов на 20–30%, роста вовлеченности на 25%, 
                        увеличения прибыли в 10 раз.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon name="Rocket" className="w-5 h-5 text-accent mt-1" />
                      <p className="text-sm">
                        <strong>Новое направление:</strong> Запускаю кастомную разработку нейросотрудников. 
                        Собираю витринные проекты на специальных условиях.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon name="DollarSign" className="w-5 h-5 text-primary mt-1" />
                      <p className="text-sm">
                        <strong>Цена:</strong> 50 000 ₽ за весь проект разработки
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-primary/20 rounded-xl p-6 border border-primary/20">
                    <p className="text-center font-heading font-semibold">
                      Я не просто технарь. Я — стратег, визуализатор, дизайнер процессов. 
                      Создаю не просто бота — а работающего нейро сотрудника.
                    </p>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
                    <img 
                      src="https://cdn.poehali.dev/files/50f1d2b3-4cf8-4ac2-b3bf-0f3f0e359c7e.jpg" 
                      alt="Валерия Кравченко" 
                      className="relative w-80 h-80 object-cover rounded-3xl border-4 border-primary/30 shadow-2xl shadow-primary/25"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Что вы получаете
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Bot", title: "Telegram-бот", desc: "Общается в вашем стиле и тоне" },
              { icon: "Target", title: "Индивидуальный сценарий", desc: "Персональная логика продаж" },
              { icon: "Settings", title: "Полную настройку", desc: "И сопровождение проекта" },
              { icon: "Database", title: "Сбор данных", desc: "Ответы, дожим, встречи, FAQ" },
              { icon: "BarChart", title: "Статистика", desc: "Контроль качества и аналитика" },
              { icon: "Download", title: "Выгрузка диалогов", desc: "Полная история общения" }
            ].map((item, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-secondary to-primary rounded-xl">
                      <Icon name={item.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Условия участия
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              "Есть входящий поток лидов (первичных клиентов)",
              "Оборот от 500 000 ₽/мес, от 120 клиентов/мес",
              "В общении с клиентами Telegram уже используется (или планировался)",
              "Вы понимаете, что бот не будет писать первым",
              "Вы можете предоставить материалы для обучения нейро сотрудника",
              "Вы готовы к диалогу и вовлечению 2–3 недели",
              "Вы готовы активно тестировать бота",
              "Вы способны предоставить структурированный отчет за период тестирования",
              "Предпочтительные сферы: малый и средний бизнес, стоматология, автосервис, ремонт и стройка, салоны красоты, онлайн-услуги"
            ].map((condition, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border border-border/50 card-glow transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              Стоимость
            </h2>
            
            <Card className="bg-gradient-primary/20 backdrop-blur-sm border border-primary/40">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <Badge className="mb-4 bg-gradient-primary border-0">
                      Спецпредложение
                    </Badge>
                    <p className="text-4xl md:text-6xl font-heading font-bold text-primary">
                      от 30 000 ₽
                    </p>
                    <p className="text-lg text-muted-foreground">за весь проект</p>
                  </div>
                  
                  <div className="border-t border-primary/20 pt-6">
                    <p className="text-lg mb-2">Обычная цена: <span className="line-through text-muted-foreground">90 000–150 000 ₽</span></p>
                    <p className="text-2xl font-heading font-bold text-accent">Только 3 места</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              Хочу в кейс
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Если интересно — жмите. Встречу вас сама.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 border border-primary/20"
                onClick={() => window.open('https://t.me/valeryka76', '_blank')}
              >
                <Icon name="Send" className="mr-2" />
                Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 hover:bg-primary/10"
                onClick={() => window.open('https://wa.me/79268140307', '_blank')}
              >
                <Icon name="MessageCircle" className="mr-2" />
                WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 hover:bg-primary/10"
                onClick={() => window.open('mailto:valeryka@yandex.ru', '_blank')}
              >
                <Icon name="Mail" className="mr-2" />
                Email
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary card-glow transition-all duration-300"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <span className="mr-2 text-lg">{social.logo}</span>
                  <Icon name={social.icon} className="mr-2 w-4 h-4" />
                  {social.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/10 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Нейропродавцы. Валерия Кравченко. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}