import React, {lazy} from 'react'
import "./privacyPolicy.css"

const NavTicket = lazy(() => import ('../../../tiketBuy/NavTickets/NavTickets'))
const Footer = lazy(() => import ('../Footer'))

const PrivacyPolicy = () => {
  return (

    <div className="containerPrivacy">
        <NavTicket/>
        <div className="boxPrivacy">
            <h4>CRYPTO CUP IS IN NO WAY ASSOCIATED TO FIFA OR ANY OF THEIR BRANDS</h4>

            <div className="titlePrivacy">
                <h2>
                    I. CONSIDERACIONES PREVIAS
                </h2>
            </div>
            <div className="textPrivacy">
                <p>
                    Los presentes Términos y Condiciones (en adelante, las “Condiciones”) regulan la prestación del servicio por parte de XXXXXX.
                            XXXXXX. se reserva la facultad de modificar en cualquier momento estos Términos y Condiciones, siendo que la versión vigente se encontrará disponible en https://cryptocupqatar.io/TermsAndConditions. 
                    <br /> <br />
                    <span className='definicionesTyC'>A. DEFINICIONES</span> <br /> <br /> XXXXXX: Es una sociedad conformada según las leyes de la República Argentina, domiciliada en La Plata, provincia de Buenos Aires, Argentina.
                    “Cryptocup”: Refiere a una plataforma de la red Binance Smart Chain, que es una plataforma para un torneo crypto basado en el conocimiento personal de los usuarios sobre fútbol, titularidad de XXXXXX. Por favor encontrá más detalles en https://cryptocupqatar.io/.
                    “Plataforma”: Refiere al sitio web y/o aplicación web o móvil al que se puede acceder vía la URL https://cryptocupqatar.io/.
                    “Persona Usuaria/s”: Persona/s física/s que haya/n aceptado los presentes Términos y Condiciones y que utilice/n los servicios de la Plataforma a partir de su cuenta personal.
                    “Frase semilla/Seed phrase”: Se refiere a un grupo de palabras aleatorias generadas por su billetera crypto cuando la configura por primera vez, y es increíblemente importante mantener un registro de estas palabras.
                    "Staking or Stake" Se refiere a servicio de staking o depósito en el que la Persona Usuaria/s pueden delegar o depositar los Tokens CRYPTOCUP del Usuario a cambio de una parte de recompensas netas por Staking en la Plataforma.
                    “Fecha seleccionada”: Se refiere a una fecha específica donde se llevará a cabo un enfrentamiento entre dos selecciones de fútbol distintas.
                    “Boost”: Se refiere a multiplicadores adquiribles por la Persona Usuaria en la Dapp de Cryptocup, que potenciará sus puntos obtenidos en el torneo al que su ticket NFT le haya garantizado acceso.
                    "BUSD": Se refiere a una moneda estable emitida para el ecosistema de Binance y respaldada por el dólar estadounidense con un valor fijo de 1 BUSD = $1,00 USD.
                    “USDT”: Se refiere a una​ moneda estable emitida por Tether Limited, respaldada por el dólar estadounidense con un valor fijo de 1 USDT = $1,00 USD.​
                    “USDC”: Se refiere a USD Coin, que es una moneda estable digital  respaldada por el dólar estadounidense con un valor fijo de 1 USDC = $1,00 USD.​
                    “DAI”: Se refiere a una criptomoneda emitida por MakerDAO, con el objetivo de mantener su valor lo más cercano posible al dólar estadounidense a través de un sistema automatizado de contratos inteligentes en la cadena de bloques de Ethereum
                    "BNB" Se refiere a una criptomoneda emitida para el ecosistema de Binance, que se requiere para pagar tarifas de transacción en la red Binance Smart Chain.
                    “Contrato inteligente”. Refiere a un programa informático que facilita, asegura, hace cumplir y ejecuta acuerdos registrados entre dos o más partes.
                    <br /><br />
                </p>
            </div>

            <div className="titlePrivacy">
                <h2>
                <span>II. PROPIEDAD INTELECTUAL</span> <br /> <br />
                </h2>
            </div>
            <div className="textPrivacy">
                <p>
                    <span className='definicionesTyC'>A. DEFINICIONES</span> <br /> <br />
                    Any acquisition of Tokens by the User from the Platform or external markets will be carried out through smart contracts on the Blokchain of the Binance Smart Chain network using a digital wallet. <br />
                    The transactions that the User makes with Crypto Cup will be through the Platform www.cryptocupqatar.io <br /><br />
                    In order to carry out any transaction, the User will have an account at https://www.cryptocupqatar.io which will be linked to his Account. Each User will have a virtual wallet associated with said account, where the payments made by the user from their own virtual wallet will be received. <br /><br />
                    The User is solely responsible for the custody of the access credentials, and must not share their passwords with third parties. Crypto Cup does not have the ability to reverse any transaction that the User has made through the use of smart contracts. <br /><br />
                    It is possible that the Binance Smart Chain network receives a fee for each transaction that the user makes, as well as commissions for the use of the network's smart contracts. The User acknowledges and accepts the fees and commissions that Binance Smart Chain applies. <br /><br />
                </p>
            </div>

            <div className="titlePrivacy">
                <h2>
                    <span> III. ECONOMÍA DE LA PLATAFORMA</span> <br /> <br />
                </h2>
            </div>
            <div className="textPrivacy">
                <p>
                    <span className='definicionesTyC'>A. ASPECTOS GENERALES</span> <br /> <br />
                    CCryptocup utiliza tokens que representan activos virtuales dentro del juego, cuya propiedad y transmisibilidad queda regida por las cláusulas de los presentes términos y condiciones de uso, así como por sus futuras modificaciones.
                    La creación y emisión de los tokens se efectúa mediante la utilización de Smart Contracts implementados en la red Binance Smart Chain.
                    El emisor de los Tokens será XXXXXX, quien podrá emitirlos y transferirlos de acuerdo a las condiciones que se establecen en el presente documento.
                    <br /><br />
       
                    <span className='definicionesTyC'>B. BILLETERA DE LA PERSONA USUARIA</span> <br /> <br />
                    Toda adquisición de Tokens por la Persona Usuaria desde la Plataforma o mercados externos se llevará a cabo mediante contratos inteligentes en la Blockchain de la red Binance Smart Chain utilizando una billetera digital. 
                    Las transacciones que la Persona Usuaria realice con Cryptocup serán a través de la Plataforma https://cryptocupqatar.io/.
                    Para poder realizar cualquier transacción la Persona Usuaria efectuará pagos desde su propia billetera virtual.
                    La Persona Usuaria es el único responsable de la custodia de sus credenciales de acceso o seed phrase, no debiendo compartir sus claves semilla con terceras personas. Cryptocup no tiene la capacidad de revertir ninguna transacción que la Persona Usuaria haya efectuado mediante la utilización de contratos inteligentes.
                    Es posible que la red Binance Smart Chain perciba una tarifa por cada transacción que la Persona Usuaria realice, así como pueden ser aplicadas comisiones por la utilización de los contratos inteligentes de la red. La Persona Usuaria reconoce y acepta las tarifas y comisiones que Binance Smart Chain aplique.
                    <br /><br />
       
                    <span className='definicionesTyC'>I. TOKENS</span> <br /> <br />
                    Cryptocup utiliza distintos tipos de tokens criptográficos para representar activos virtuales cuyas características y funcionalidades son diferentes.
                    <br /><br />

                    <span className='definicionesTyC'>I.A. NFTs</span> <br /> <br />
                    Son tokens que representan un activo virtual único e irrepetible (tokens no fungibles). Se identifican como Token ERC721 (BEP721) en la Binance Smart Chain.
                    Cada uno de los tokens emitidos representará en la plataforma de Cryptocup un ticket de acceso virtual/premiación virtual, único e irrepetible o también , cuyas características serán determinadas por Cryptocup (Ver Whitepaper).
                    La titularidad del NFT otorga a la Persona Usuaria el derecho a ingresar a la Dapp, pudiendo ser visualizado únicamente por él, en tanto que los competidores o terceros podrán estar viendo en forma simultánea su propio ticket asignado por la Plataforma.
                    Asimismo, el titular del NFT tendrá derecho a que por cada partido acertado, se le recompense con una cantidad determinada de puntos, los cuales serán determinada por Cryptocup (Ver Whitepaper).
                    Los NFT podrán ser transferidos por la Persona Usuaria a terceros una vez que Cryptocup habilite dicha opción. En este caso, la Persona Usuaria asume exclusiva responsabilidad por la transacción, careciendo Cryptocup de toda intervención en la operación. 
                    La Persona Usuaria reconoce que los NFTs representan activos digitales en la Binance Smart Chain, y que no se encuentran respaldados por bienes físicos.
                    <br /><br />

                    <span className='definicionesTyC'>I.B. TOKEN CCs</span> <br /> <br />
                    El CC es un token que representa un activo virtual fungible. Se identifican como Token ERC20 (BEP20) en la Binance Smart Chain. No existe límite de emisión por parte de Cryptocup.
                    Cryptocup emitirá un máximo de XXXXXX TOKEN CC en toda la historia del juego. La emisión de los tokens y su venta o transferencia bajo cualquier título será determinada de acuerdo al cronograma (Ver Whitepaper) que Cryptocup establezca. 
                    Los TOKEN CC que fueran emitidos podrán encontrarse bloqueados por un período de tiempo con el fin de permitir su utilización progresiva. Los TOKEN CC se irán desbloqueando y asignando por Cryptocup de acuerdo al cronograma que este disponga. Resulta condición esencial para el ejercicio de los derechos que otorga cada TOKEN CC que él mismo se encuentre desbloqueado.
                    Los TOKEN CC podrán ser utilizados por la Persona Usuaria para adquirir tickets una vez que Cryptocup habilite dicha opción, adquirir multiplicadores, hacer staking y “aumentar su cantidad de tokens seleccionados al ser depositados en un partido en específico” (Ver Whitepaper). La utilización del TOKEN CC en la plataforma para las funciones antes enunciadas implica su transferencia a favor de Cryptocup, el que podrá disponer su eliminación o nueva transferencia.
                    Cryptocup determinará la cantidad de TOKEN CC que deberán utilizarse para realizar las diversas actividades o adquisiciones en la Plataforma (Ver Whitepaper). Cada Persona Usuaria en caso de haber depositado tokens en una fecha seleccionada tendrá derecho a que por cada partido acertado se le recompense con una cantidad determinada de TOKEN CC así mismo como la reducción de este balance en caso de no acierto, estos montos serán establecidos por Cryptocup según el partido, y demás estadísticas.
                    Los TOKEN CC podrán ser transferidos por la Persona Usuaria a terceros. En este caso, la Persona Usuaria asume exclusiva responsabilidad por la transacción, careciendo Cryptocup de toda intervención en la operación.

                    Cryptocup podrá disponer que los TOKEN CC sean utilizados para adquirir tickets, boost u otras utilidades dentro del juego. Cryptocup determinará la cantidad de TOKEN CC que deberán utilizarse para realizar las diversas actividades o adquisiciones en la Plataforma.
                    Las Personas Usuarias que queden comprendidos al final de cada torneo, tendrán derecho a ser recompensados con la cantidad de TOKEN CC en la cantidad que Cryptocup determine para cada torneo y posición obtenida.

                    Los TOKEN CC podrán ser transferidos por la Persona Usuaria a terceros. En este caso, la Persona Usuaria asume exclusiva responsabilidad por la transacción, careciendo Cryptocup de toda intervención en la operación. 
                    La Persona Usuaria reconoce que los TOKEN CC representan activos digitales en la Binance Smart Chain, y que no se encuentran respaldados por bienes físicos.
                    <br /><br />

                    
                    <span className='definicionesTyC'>C. COMPRAS EN LA PLATAFORMA </span> <br /> <br />
                    El CC es un token que representa un activo virtual fungible. Se identifican como Token ERC20 (BEP20) en la Binance Smart Chain. No existe límite de emisión por parte de Cryptocup.
                    Cryptocup emitirá un máximo de XXXXXX TOKEN CC en toda la historia del juego. La emisión de los tokens y su venta o transferencia bajo cualquier título será determinada de acuerdo al cronograma (Ver Whitepaper) que Cryptocup establezca. 
                    Los TOKEN CC que fueran emitidos podrán encontrarse bloqueados por un período de tiempo con el fin de permitir su utilización progresiva. Los TOKEN CC se irán desbloqueando y asignando por Cryptocup de acuerdo al cronograma que este disponga. Resulta condición esencial para el ejercicio de los derechos que otorga cada TOKEN CC que él mismo se encuentre desbloqueado.
                    Los TOKEN CC podrán ser utilizados por la Persona Usuaria para adquirir tickets una vez que Cryptocup habilite dicha opción, adquirir multiplicadores, hacer staking y “aumentar su cantidad de tokens seleccionados al ser depositados en un partido en específico” (Ver Whitepaper). La utilización del TOKEN CC en la plataforma para las funciones antes enunciadas implica su transferencia a favor de Cryptocup, el que podrá disponer su eliminación o nueva transferencia.
                    Cryptocup determinará la cantidad de TOKEN CC que deberán utilizarse para realizar las diversas actividades o adquisiciones en la Plataforma (Ver Whitepaper). Cada Persona Usuaria en caso de haber depositado tokens en una fecha seleccionada tendrá derecho a que por cada partido acertado se le recompense con una cantidad determinada de TOKEN CC así mismo como la reducción de este balance en caso de no acierto, estos montos serán establecidos por Cryptocup según el partido, y demás estadísticas.
                    Los TOKEN CC podrán ser transferidos por la Persona Usuaria a terceros. En este caso, la Persona Usuaria asume exclusiva responsabilidad por la transacción, careciendo Cryptocup de toda intervención en la operación.

                    Cryptocup podrá disponer que los TOKEN CC sean utilizados para adquirir tickets, boost u otras utilidades dentro del juego. Cryptocup determinará la cantidad de TOKEN CC que deberán utilizarse para realizar las diversas actividades o adquisiciones en la Plataforma.
                    Las Personas Usuarias que queden comprendidos al final de cada torneo, tendrán derecho a ser recompensados con la cantidad de TOKEN CC en la cantidad que Cryptocup determine para cada torneo y posición obtenida.

                    Los TOKEN CC podrán ser transferidos por la Persona Usuaria a terceros. En este caso, la Persona Usuaria asume exclusiva responsabilidad por la transacción, careciendo Cryptocup de toda intervención en la operación. 
                    La Persona Usuaria reconoce que los TOKEN CC representan activos digitales en la Binance Smart Chain, y que no se encuentran respaldados por bienes físicos.
                    <br /><br />

                    <span className='definicionesTyC'>C. TOKEN CCs</span> <br /> <br />

                    El CC es un token que representa un activo virtual fungible. Se identifican como Token ERC20 (BEP20) en la Binance Smart Chain. No existe límite de emisión por parte de Cryptocup.
                    Cryptocup emitirá un máximo de XXXXXX TOKEN CC en toda la historia del juego. La emisión de los tokens y su venta o transferencia bajo cualquier título será determinada de acuerdo al cronograma (Ver Whitepaper) que Cryptocup establezca. 
                    Los TOKEN CC que fueran emitidos podrán encontrarse bloqueados por un período de tiempo con el fin de permitir su utilización progresiva. Los TOKEN CC se irán desbloqueando y asignando por Cryptocup de acuerdo al cronograma que este disponga. Resulta condición esencial para el ejercicio de los derechos que otorga cada TOKEN CC que él mismo se encuentre desbloqueado.
                    Los TOKEN CC podrán ser utilizados por la Persona Usuaria para adquirir tickets una vez que Cryptocup habilite dicha opción, adquirir multiplicadores, hacer staking y “aumentar su cantidad de tokens seleccionados al ser depositados en un partido en específico” (Ver Whitepaper). La utilización del TOKEN CC en la plataforma para las funciones antes enunciadas implica su transferencia a favor de Cryptocup, el que podrá disponer su eliminación o nueva transferencia.
                    Cryptocup determinará la cantidad de TOKEN CC que deberán utilizarse para realizar las diversas actividades o adquisiciones en la Plataforma (Ver Whitepaper). Cada Persona Usuaria en caso de haber depositado tokens en una fecha seleccionada tendrá derecho a que por cada partido acertado se le recompense con una cantidad determinada de TOKEN CC así mismo como la reducción de este balance en caso de no acierto, estos montos serán establecidos por Cryptocup según el partido, y demás estadísticas.
                    Los TOKEN CC podrán ser transferidos por la Persona Usuaria a terceros. En este caso, la Persona Usuaria asume exclusiva responsabilidad por la transacción, careciendo Cryptocup de toda intervención en la operación.

                    Cryptocup podrá disponer que los TOKEN CC sean utilizados para adquirir tickets, boost u otras utilidades dentro del juego. Cryptocup determinará la cantidad de TOKEN CC que deberán utilizarse para realizar las diversas actividades o adquisiciones en la Plataforma.
                    Las Personas Usuarias que queden comprendidos al final de cada torneo, tendrán derecho a ser recompensados con la cantidad de TOKEN CC en la cantidad que Cryptocup determine para cada torneo y posición obtenida.

                    Los TOKEN CC podrán ser transferidos por la Persona Usuaria a terceros. En este caso, la Persona Usuaria asume exclusiva responsabilidad por la transacción, careciendo Cryptocup de toda intervención en la operación. 
                    La Persona Usuaria reconoce que los TOKEN CC representan activos digitales en la Binance Smart Chain, y que no se encuentran respaldados por bienes físicos.
                    <br /><br />

                    
                    <span className='definicionesTyC'>C. COMPRAS EN LA PLATAFORMA </span> <br /> <br />
                    <span className='definicionesTyC'>I. </span> 
                    Cuando la Persona Usuaria desee adquirir TOKENS (NFT o CC), deberá transferir criptoactivos autorizados por Cryptocup (USDT, BUSD, DAI, USDC a través de la Binance Smart Chain) a la billetera virtual de propiedad de Cryptocup que se vincula a la Persona Usuaria. Cryptocup acreditará a la Persona Usuaria crédito a su cuenta en https://cryptocupqatar.io/ dentro de la hora de realizada la transferencia de los criptoactivos por parte de la Persona Usuaria (siempre que no existieran demoras imputables a la red), el cual podrá ser utilizado para adquirir TOKENS. 
                    <br /><br />
                    <span className='definicionesTyC'>II. </span> 
                    Los Tokens podrán ser utilizados dentro del juego según las funciones que tengan asignadas (Ver Whitepaper) o la Persona Usuaria podrá transferirlos fuera de la plataforma de Cryptocup, cuando esté habilitada esta opción por Cryptocup. El hecho de transferir o negociar el TOKEN fuera del sitio https://cryptocupqatar.io/ implica automáticamente la liberación de Cryptocup de cualquier responsabilidad, en tanto la Persona Usuaria asume exclusivamente y en forma personal todo riesgo o consecuencia de transferir o negociar los TOKENS fuera de la plataforma administrada por Cryptocup. 
                    <br /><br />
                    <span className='definicionesTyC'>III. </span> 
                    La Persona Usuaria será la única responsable de las transacciones que realice con los TOKENS que haya adquirido, no teniendo “XXXXXXnombre entidad legal”. control sobre las operaciones que realice. En virtud de lo expuesto, se deja expresamente aclarado que la compañía no tiene la capacidad de detener ni revertir ninguna transacción que la Persona Usuaria haya concretado, siendo la Persona Usuaria el único responsable por las operaciones que realice, ya sea dentro o fuera de las plataformas administradas o utilizadas por la compañía. Cryptocup no será responsable por cualquier error de la Persona Usuaria en la designación de billeteras de destinos y los montos que transfiera. La Persona Usuaria asume plena responsabilidad, conociendo que la operación es irrevocable.
                    <br /><br />

                    <span className='definicionesTyC'>IV. </span> 
                    La Persona Usuaria será la única responsable de las transacciones que realice con los TOKENS que haya adquirido, no teniendo “XXXXXXnombre entidad legal”. control sobre las operaciones que realice. En virtud de lo expuesto, se deja expresamente aclarado que la compañía no tiene la capacidad de detener ni revertir ninguna transacción que la Persona Usuaria haya concretado, siendo la Persona Usuaria el único responsable por las operaciones que realice, ya sea dentro o fuera de las plataformas administradas o utilizadas por la compañía. Cryptocup no será responsable por cualquier error de la Persona Usuaria en la designación de billeteras de destinos y los montos que transfiera. La Persona Usuaria asume plena responsabilidad, conociendo que la operación es irrevocable.
                    <br /><br />

                    <span className='definicionesTyC'>V. </span> 
                    Cryptocup sólo será responsable por el cumplimiento del contrato que haya concertado en forma directa con la Persona Usuaria, no así de las restantes operaciones que se efectúen con los TOKENS en las que no intervenga. En particular, no será responsable por las ofertas a público indeterminado que se hagan de los TOKENS en sitios que no fueran administrados por Cryptocup. No tendrá ninguna responsabilidad en relación a mercados secundarios en los que se pudieran ofrecer los TOKENS, así como el valor que pudieran tener, o la forma en que fueran ofrecidos y transados por terceros.
                    <br /><br />

                    <span className='definicionesTyC'>VI. </span> 
                    Se deja aclarado que no teniendo los TOKENS respaldo en bienes físicos, y sirviendo únicamente para las funciones que aquí se detallan, ninguna responsabilidad tendrá Cryptocup sobre variaciones de precio en plataformas de compraventa de criptoactivos o en cualquier mercado, asumiendo la Persona Usuaria que haya dispuesto su venta o compra en dichas plataformas todo riesgo de desvalorización, asumiendo expresamente que dichos mercados se encuentran sometidos a grandes riesgos.
                    <br /><br />

                    <span className='definicionesTyC'>VII. </span> 
                    La Persona Usuaria será el único y exclusivo responsable por el pago de todo impuesto, tasa, contribución o arancel vigente a la fecha y los que en lo sucesivo se crearán (excepto los impuestos sobre los ingresos netos de Cryptocup), que directa o indirectamente pudieran gravar las operaciones que realice dentro o fuera de la plataforma con los TOKENS o por el uso de la Plataforma y/o Aplicación. En particular y en caso de corresponder conforme leyes vigentes en el país de origen, el I.V.A., aranceles aduaneros por importación o exportación, o cualquier otro tributo.
                    La Persona Usuaria deberá abonar a Cryptocup los mencionados tributos conforme los términos, plazos y normas que legislen su percepción. Cryptocup podrá retener de la cuenta de la Persona Usuaria los montos que fueran necesarios para el pago de los tributos que se encontraran a su cargo. Si los mismos fueran insuficientes, la Persona Usuaria deberá acreditar a favor de Cryptocup los montos necesarios para cubrir el tributo.
                    <br /><br />

                    <span className='definicionesTyC'>D. MARKETPLACE CRYPTOCUP</span> <br /> <br />

                    Cryptocup pone a disposición de las personas Usuarias un espacio virtual que les permite ofrecer, vender y/o comprar activos digitales, disponible en https://cryptocupqatar.io/marketplace. Los Vendedores utilizan dicho Marketplace para publicar y definir las condiciones de su oferta. 
                    En esta sección, se describe el funcionamiento de dicho marketplace, entendiendo al mismo como la plataforma de comercio electrónico donde las Personas Usuarias pueden vender y comprar activos digitales Cryptocup descritos anteriormente en estos Términos y Condiciones. 
                    <br /><br />

                    <span className='definicionesTyC'>I. </span> 
                    Solamente se podrán ofrecer activos digitales creados por Cryptocup, es decir, principalmente Tokens conforme la descripción que de ellos se realice en la sección ‘IV B’ de estos Términos y Condiciones. 
                    <br /><br />
                    <span className='definicionesTyC'>II. </span> 
                    En particular, el Marketplace se utiliza para ofrecer y/o adquirir Tokens NFT de tickets.
                    <br /><br />
                    <span className='definicionesTyC'>III. </span> 
                    Una descripción de los Token se encuentra disponible en la Sección ‘IV B’ de los presentes Términos y Condiciones. 
                    <br /><br />

                    <span className='definicionesTyC'>IV. </span> 
                    Los pagos en las compras efectuadas por Personas Usuarias en el marketplace solo se podrán realizar utilizando Token CC, que deberán ser adquiridos conforme a lo estipulado en la sección ‘IV C’ de estos Términos y Condiciones.
                    <br /><br />

                    <span className='definicionesTyC'>V. </span> 
                    Cryptocup retendrá un 10% del valor de cada una de las transacciones que se efectúen en la plataforma, cantidad que será tomado como comisión de venta.
                    <br /><br />

                    <span className='definicionesTyC'>VI. </span> 
                    El marketplace mostrará el precio que el Vendedor decida recibir sumándole dicho porcentaje, por lo que Cryptocup retendrá el 10%.
                    <br /><br />

                    <span className='definicionesTyC'>VII. </span> 
                    Para poder ofrecer un activo digital de Cryptocup en el Marketplace, es necesario primero que la Persona Usuaria haya adquirido dicho activo digital por los medios que Cryptocup dispone en su Plataforma, incluyendo la adquisición a través de su sitio web https://cryptocupqatar.io/.. 
                    <br /><br />
                    
                    <span className='definicionesTyC'>VIII. </span> 
                    La Persona Usuaria interesada en adquirir uno de los activos digitales publicados en el Marketplace podrá encontrar en la publicación toda la información que el Vendedor proporcione en relación al producto a ofertar.
                    <br /><br />

                    <span className='definicionesTyC'>IX. </span> 
                    El Comprador se obliga a pagar el precio total del activo digital seleccionado utilizando la opción “Comprar” disponible en la misma Plataforma.
                    <br /><br />

                    <span className='definicionesTyC'>X. </span> 
                    Cryptocup sólo será responsable por el cumplimiento del contrato que haya concertado en forma directa con la Persona Usuaria, no así de las restantes operaciones que se efectúen con los TOKENS en las que no intervenga. En particular, no será responsable por las ofertas a público indeterminado que se hagan de los TOKENS en sitios que no fueran administrados por Cryptocup. No tendrá ninguna responsabilidad en relación a mercados secundarios en los que se pudieran ofrecer los TOKENS, así como el valor que pudieran tener, o la forma en que fueran ofrecidos y transados por terceros.
                    <br /><br />         
                </p>

                <div className="titlePrivacy">
                    <h2>
                        <span> V. DINÁMICA DEL JUEGO</span> <br /> <br />
                    </h2>
                </div>
                <p>
                    La dinámica del juego, así como las recompensas disponibles según el staking de cada jugador, descripción del mecanismo para obtener puntos, informació sobre torneos, modalidad de ingreso y participación, y cualquier otro asunto vinculado a la dinámica del juego, se encuentran actualizadas en el Whitepape   (https://crypto-cup.gitbook.io/cryptocup/introduccion/crypto-cup)
                    <br /><br/>
                </p>

                <div className="titlePrivacy">
                    <h2>
                        VI. POLÍTICA DE PROTECCIÓN DE DATOS
                    </h2>
                </div>
                <p>
                    Este sitio utiliza y protege los datos proporcionados por las Personas Usuarias conforme ley vigente y estándares de buenas prácticas internacionales en protección de datos. Cryptocup se compromete con la seguridad de los datos de las Personas usuarias, guardando la debida reserva y confidencialidad. Cuando el sistema solicita llenar los campos de datos personales necesarios para la creación de una cuenta de usuario, lo hace asegurando que sólo se emplean dichos datos de acuerdo con los términos aquí presentes. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser actualizada.
                    Los siguientes tipos de datos (en adelante, “datos recolectados”) pueden ser almacenados y procesados por el sistema:
                    <br /><br />

                    <span className='definicionesTyC'>I. </span> 
                    Datos que fuesen necesarios para generar una cuenta personal en el sitio, Nombre completo y Correo Electrónico.
                    <br /><br />
                    <span className='definicionesTyC'>II. </span> 
                    Datos sobre su ordenador, incluyendo dirección IP y ubicación geográfica.
                    <br /><br />
                    <span className='definicionesTyC'>III. </span> 
                    Datos sobre sus visitas y uso del sistema.
                    <br /><br />

                    <span className='definicionesTyC'>IV. </span> 
                    Datos que introduzca para suscribirse a nuestros correos y boletines, como nombre y correo electrónico. 
                    <br /><br />

                    <span className='definicionesTyC'>V. </span> 
                    Datos que se generen mientras navega en nuestro sitio web. 
                    <br /><br />

                    <span className='definicionesTyC'>VI. </span> 
                    Nombre de la Persona Usuaria, avatar, edad, género, área de residencia, dirección de correo electrónico.
                    <br /><br />

                    <span className='definicionesTyC'>VII. </span> 
                    Número de billetera electrónica de la Persona Usuaria.
                    <br /><br />
                    
                    <span className='definicionesTyC'>VIII. </span> 
                    Datos de redes sociales
                    <br /><br />

                    <span className='definicionesTyC'>IX. </span> 
                    Datos requeridos para ingresar a Whitelist.
                    <br /><br />

                    Desde Cryptocup, tomaremos todas las precauciones razonables técnicas y organizacionales existentes a los fines de evitar la pérdida, mal uso o alteración de su información personal. De todas maneras, usted reconoce que la transmisión de datos en internet es inherentemente insegura y que no se puede garantizar absolutamente la seguridad de los mismos. 
                    En caso de solicitarlo, la Persona Usuaria recibirá toda la información recolectada y almacenada por Cryptocup. Dicha solicitud deberá ser acompañada de prueba suficiente de identidad. Para mayor información sobre el alcance de lo referido, o al proceso descrito, deberá contactarse al siguiente correo electrónico: info@cryptocup.com utilizando el asunto: ‘Datos personales’. <br /><br />


                    <span className='definicionesTyC'>A. USO DE DATOS</span> <br /><br />
                    Los datos recolectados podrán ser utilizada con alguno o todos lo fines que se describen a continuación:
                    <br /><br />

                    <span className='definicionesTyC'>I. </span> 
                    Administrar el sistema, incluyendo la puesta a disposición de estos datos a nuestros dependientes, oficiales, proveedores, entre otros, como sea razonable y necesario según lo estipulado en estos términos y condiciones.
                    <br /><br />
                    <span className='definicionesTyC'>II. </span> 
                    Mejorar la oferta de servicios.
                    <br /><br />
                    <span className='definicionesTyC'>III. </span> 
                    Enviar comunicación publicitaria, notificaciones, o cualquier otro tipo de información.
                    <br /><br />

                    <span className='definicionesTyC'>IV. </span> 
                    Enviar sugerencias para mejorar las funcionalidades del producto (que podrán ser, dependiendo el caso, sugerencias sin cargo, o con cargo).
                    <br /><br />

                    <span className='definicionesTyC'>V. </span> 
                    Suministrar información estadística a terceros sobre nuestras Persona Usuaria habiendo primeramente disociado correctamente la información personal.
                    <br /><br />

                    <span className='definicionesTyC'>VI. </span> 
                    Verificar el cumplimiento de estos términos y condiciones.
                    <br /><br />

                    <span className='definicionesTyC'>VII. </span> 
                    Otros usos no previstos por esta enunciación.
                    <br /><br />

                    En caso de mediar solicitud judicial competente o en ocasión de una situación que lo justifique, podremos divulgar sus datos personales hasta lo requerido por la ley. Esto incluye supuestos donde dicha publicación se realice a los fines de custodiar y ejercer los derechos de Cryptocup. 
                    Los datos recolectados, almacenados y procesados para cualquiera de los fines mencionados, serán eliminados luego de transcurrido como máximo 2 años desde que la Persona Usuaria ha cancelado su suscripción al sistema.
                </p>

                <div className="titlePrivacy">
                        <h2>
                            VII. LIMITACIÓN DE LA RESPONSABILIDAD
                        </h2>
                </div>
                <p>
                    <span className='definicionesTyC'>I. </span> 
                    La Persona Usuaria reconoce y acepta que Cryptocup es propiedad de XXXXXX. y que sus accionistas limitan su responsabilidad a la integración delcapital suscrito, no asumiendo ninguna responsabilidad en exceso a dicho aporte.
                    <br /><br />

                    <span className='definicionesTyC'>II. </span> 
                    La compañía no será responsable por ningún daño que la Persona Usuaria genere a terceros mediante la utilización de la Plataforma o los Tokens. Tampocoserá responsable por conductas delictivas imputables a la Persona Usuaria.
                    <br /><br />

                    <span className='definicionesTyC'>III. </span> 
                    El uso de Cryptocup, los Tokens y demás servicios de la plataforma está condicionado a que la Persona Usuaria cumpla todas las regulaciones legales quefueren aplicables.
                    <br /><br />

                    <span className='definicionesTyC'>IV. </span> 
                    La compañía no asume ningúna responsabilidad en relación a daños patrimoniales que la Persona Usuaria pudiera sufrir por las transacciones que realicecon los Tokens respecto a terceros. El hecho de transferir los Tokens fuera de la plataforma administrada por Cryptocup exime a esta última porcualquier responsabilidad relacionada con las transacciones que realice.
                    <br /><br />

                    <span className='definicionesTyC'>V. </span> 
                    Queda expresamente aclarado que no cuenta Cryptocup con la posibilidad de revocar ni detener la ejecución de los Contratos inteligentes. Tampoco cuentacon la posibilidad de corregir errores que la Persona Usuaria hubiera cometido al identificar billeteras virtuales de destino, ni errores en cantidadeso montos. 
                    <br /><br />

                    <span className='definicionesTyC'>VI. </span> 
                    Los Tokens no cuentan con un respaldo físico. De ser negociados por la Persona Usuaria en cualquier plataforma, la compañía no se responsabiliza porvariaciones en su valor. La Persona Usuaria asume expresamente que la negociación de tokens está sujeta a gran volatilidad en su cotización, por lo quela Persona Usuaria asume cualquier riesgo al respecto.
                    <br /><br />

                    <span className='definicionesTyC'>VII. </span> 
                    La compañía no será responsable de ningún daño que no tenga relación de causalidad inmediata con su actuar directo, quedando expresamente excluida laresponsabilidad por las consecuencias mediatas (cualquiera fuera su tipo) y remotas.
                    <br /><br />
                </p>
                    
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy