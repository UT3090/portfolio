import { Splide, SplideSlide } from '@splidejs/react-splide';
import Layout from "../components/Layout";
import Setting from '../setting';

export default function AboutPage() {
  return (
    <Layout>
      <div id="About" className="mt-3">
        <h1>About Kurokawa, Who is</h1>
        <p>私は天才プログラマ、黒川唯人。<br /><br />ITのすべてを知り尽くした男。<br />私の辞書に不可能の二文字はない。</p>
        <Splide>
          {
            Setting.myPics.map((pic, index: number) => {
              <SplideSlide>
                <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/sikun_20220402-180657-2_TP_V.jpg" alt="かわいい猫の画像 part3" />
              </SplideSlide>
            })
          }
        </Splide>
      </div>
    </Layout>
  );
};
