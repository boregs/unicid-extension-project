import '../index.css'
import imgImage from '../assets/enfermeira-atencao-primaria.png'
import imgImage1 from '../assets/istockphoto-1421626437-612x612.png'
import imgImage2 from '../assets/a.png'
import imgImage3 from '../assets/c.png'

function Text() {
  return (
    <div className="text-container" data-name="Text">
      <div className="text-h1-wrapper">
        <h1 className="text-h1">UBS Padre José de Anchieta</h1>
      </div>
      <div className="text-p-wrapper">
        <p className="text-p">Um portal para sanar suas dúvidas</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="btn-primary" data-name="Primary button">
      <div className="btn-primary-text">
        <p className="leading-[1.45]">Triagem Online</p>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="btn-secondary" data-name="Secondary button">
      <div aria-hidden="true" className="btn-secondary-border" />
      <div className="btn-secondary-text">
        <p className="leading-[1.45]">Perguntas Frequentes</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="buttons-group" data-name="Buttons">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

function Hero() {
  return (
    <section className="section-base" data-name="Hero">
      <div className="section-wrapper">
        <div className="hero-content">
          <Text />
          <Buttons />
        </div>
      </div>
    </section>
  );
}

function Image() {
  return (
    <section className="section-base" data-name="Image">
      <div className="image-wrapper">
        <div className="image-content">
          <div className="hero-image-box" data-name="Image">
            <img alt="Landing detail" className="img-fill" src={imgImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Text1() {
  return (
    <div className="content-text-group" data-name="Text">
      <div className="content-h2-wrapper">
        <h2 className="content-h2">{`Triagem Online `}</h2>
      </div>
      <div className="content-p-wrapper">
        <p className="leading-[1.45]">Descubra o local certo para o seu atendimento e tire suas dúvidas de saúde em qualquer dispositivo, antes mesmo de sair de casa.</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-block" data-name="Content">
      <Text1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="feature-img-col" data-name="Image">
      <div className="feature-img-box-1" data-name="Image">
        <img alt="Product detail" className="img-fill" src={imgImage1} />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="section-base" data-name="Row 1">
      <div className="row-wrapper">
        <div className="row-content-1">
          <div className="row-col">
            <Content />
          </div>
          <Image1 />
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="feature-img-col" data-name="Image">
      <div className="feature-img-box-2" data-name="Image">
        <img alt="Product detail" className="img-fill" src={imgImage2} />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-text-group" data-name="Text">
      <div className="content-h2-wrapper">
        <h2 className="content-h2">Perguntas Frequentes</h2>
      </div>
      <div className="content-p-wrapper">
        <p className="leading-[1.45]">Possui alguma dúvida sobre a equipe disponivel, vacinas ou como marcar consultas? Reunimos as respostas para as perguntas mais comuns da nossa comunidade para você.</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-block" data-name="Content">
      <Text2 />
    </div>
  );
}

function Row1() {
  return (
    <div className="section-base" data-name="Row 2">
      <div className="row-wrapper">
        <div className="row-content-2">
          <Image2 />
          <div className="row-col">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <section className="feature-container" data-name="Feature">
      <Row />
      <Row1 />
    </section>
  );
}

function TextBlock1() {
  return (
    <div className="text-block-item" data-name="Text block 2">
      <div aria-hidden="true" className="text-block-divider" />
      <p className="text-block-title">Sobre o projeto</p>
      <div className="text-block-p1-wrapper">
        <p className="leading-[1.45]">Criado por alunos dos cursos de TI da UNICID Tatuapé, nosso portal conecta a comunidade à saúde de forma inteligente. Menos filas, informação rápida e mais respeito ao tempo dos nossos idosos.</p>
      </div>
    </div>
  );
}

function TextBlock2() {
  return (
    <div className="text-block-item" data-name="Text block 3">
      <div aria-hidden="true" className="text-block-divider" />
      <p className="text-block-title">Desenvolvimento</p>
      <div className="text-block-p2-wrapper">
        <p className="leading-[1.45]">Ação extensionista da UNICID. Construído com React, Tailwind CSS, AWS entre outras técnologias, o sistema oferece uma navegação simples e inclusiva para o público idoso.</p>
      </div>
    </div>
  );
}

function TextBlock() {
  return (
    <div className="text-block-group" data-name="Text block">
      <TextBlock1 />
      <TextBlock2 />
    </div>
  );
}

function TextRow() {
  return (
    <section className="text-row-section" data-name="Text row">
      <div className="text-row-clip">
        <div className="text-row-content">
          <TextBlock />
        </div>
      </div>
    </section>
  );
}

function Image3() {
  return (
    <div className="logo-box" data-name="Image">
      <img alt="Logomark" className="logo-img" src={imgImage3} />
    </div>
  );
}

function Company() {
  return (
    <div className="company-group" data-name="Company">
      <Image3 />
      <div className="company-name">
        <p className="leading-[1.45]">UBS P.J.A</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav-group" data-name="Nav">
      <div className="nav-item">
        <p className="leading-[1.45]">Triagem</p>
      </div>
      <div className="nav-item">
        <p className="leading-[1.45]">FAQs</p>
      </div>
    </nav>
  );
}

function Text3() {
  return (
    <div className="footer-top-group" data-name="Text">
      <Company />
      <Nav />
    </div>
  );
}

function Footer() {
  return (
    <footer className="section-base" data-name="Footer">
      <div className="row-wrapper">
        <div className="footer-content">
          <Text3 />
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="main-container" tabIndex="-1" data-name="Container">
      <Hero />
      <Image />
      <Feature />
      <TextRow />
      <Footer />
    </main>
  );
}
