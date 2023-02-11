import Script from 'next/script';
//import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></Script>
      <center><b>Trustpilot</b> widget in <i>Next.js</i></center>

      <div className="trustpilot-widget" data-locale="en-US" data-template-id="54ad5defc6454f065c28af8b"
        data-businessunit-id="6216c06789423feabd690a67" data-style-height="240px" data-style-width="100%" data-theme="light"
        data-stars="5" data-review-languages="en">
        <a href="https://www.trustpilot.com/review/kidztopros.com" target="_blank" rel="noopener">Trustpilot</a>
      </div>

    </div>
  )
}
