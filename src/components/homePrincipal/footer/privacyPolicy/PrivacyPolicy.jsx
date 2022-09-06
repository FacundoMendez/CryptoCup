import React, {lazy} from 'react'
import "./privacyPolicy.css"

const NavTicket = lazy(() => import ('../../../tiketBuy/NavTickets/NavTickets'))
const Footer = lazy(() => import ('../Footer'))

const PrivacyPolicy = () => {
  return (

    <div className="containerPrivacy">
        <NavTicket/>

        <div className='containerTyC'>

{/*                 <div className="boxEnlaces">
                    <ul>
                        <li>I.  PRELIMINAR</li>
                        <li>II.  DEFINICIONES</li>
                        <li>III.  CONDICIONES DE USO</li>
                        <li>IV.  ACCESO AL JUEGO</li>
                        <li>V. CUSTODIA DE CONTRASEÑA</li>
                        <li>VI. CONDUCTAS PROHIBIDAS</li>
                        <li>VII.  ADVERTENCIAS Y SUSPENSIÓN PROVISORIA</li>
                        <li>VIII.  BLOQUEO DE ACCESO</li>
                        <li>IX.  BILLETERA DEL USUARIO</li>
                        <li>X.  POLÍTICA DE PROTECCIÓN DE DATOS</li>
                        <li>XI.  PROPIEDAD INTELECTUAL</li>
                        <li>XII.  ASPECTOS IMPOSITIVOS</li>
                        <li>XIII.  PROHIBICIÓN DE CESIÓN</li>
                        <li>XIV.  NOTIFICACIONES</li>
                        <li>XV.  INDEMNIZACIÓN</li>
                        <li>XVI.  INEFICACIA DE LAS CLÁUSULAS</li>
                        <li>XVII.  DOCUMENTACIÓN CONTRACTUAL</li>
                        <li>XVIII.  JURISDICCIÓN Y LEY APLICABLE</li>
                    </ul>
                </div>
 */}

            <div className="boxPrivacy">
                
                <div className="textUpdate">
                    <h2><span>Crypto Cup</span></h2>
                    <h4>Terms and Conditions of <a className='linkCryptocup' href="https://www.cryptocupqatar.io/">https://www.cryptocupqatar.io/</a></h4>
                    <h5>Last resived Date: 5 September 2022</h5>
                </div>


                <div className="titlePrivacy">
                    <h2 className='title1' id='preliminar'>
                        I. PRELIMINAR
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>1.1. </span> <br /> <br />
                        Los presentes términos y condiciones generales (en adelante, los “Términos y Condiciones Generales”), establecen las reglas de uso del sitio https://www.cryptocupqatar.io/, así como de las aplicaciones móviles vinculadas al mismo y el acceso por cualquier canal. También regula la relación entre los Visitantes y Usuarios y MINTZ SOCIEDAD ANÓNIMA, fijando los derechos y obligaciones de cada parte con motivo de la utilización del Sitio.
                        <br /><br />

                        <span className='definicionesTyC'>1.2. </span> <br /> <br />
                            MINTZ SOCIEDAD ANÓNIMA, de la ciudad y partido de La Plata, Provincia de Buenos Aires, es el titular del sitio  https://www.cryptocupqatar.io/ y se reserva el derecho de modificar en cualquier momento estos Términos y Condiciones. 
                        <br /><br />

                        <span className='definicionesTyC'>1.3. </span> <br /> <br />
                            Todos los Visitantes y Usuarios por el solo hecho de ingresar al Sitio de Crypto Cup se encontrarán sujetos a los presentes Términos y Condiciones Generales. Se entenderá que el Visitante y Usuario declara haberlos leído, comprendido y aceptado en su totalidad. Cualquier persona que no acepte estos Términos y Condiciones Generales, deberá abstenerse de utilizar el Sitio.
                        <br /><br />

                        <span className='definicionesTyC'>1.4. </span> <br /> <br />
                            El usuario deberá revisar con frecuencia si existen cambios en los Términos y Condiciones. En caso de modificación, entrarán en vigencia al segundo día de su publicación. Todo Usuario que no aceptara las modificaciones deberá remitir un e-mail dentro de los dos días siguientes a la publicación manifestándolo expresamente, esto implicará la rescisión del contrato. A partir del envío de dicho mail el Usuario no podrá realizar más operaciones en el Sitio. Se interpretará que si el Usuario no remitió su disconformidad en el plazo estipulado, acepta los nuevos Términos y Condiciones.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='definiciones'>
                        II. DEFINICIONES
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>2.1.</span> <br /> <br />
                            Crypto Cup Qatar: es una plataforma de juegos online (propiedad de MINTZ SOCIEDAD ANÓNIMA) basada en la lógica play to earn, que mediante la utilización de la tecnología blokchain permite a los Usuarios obtener recompensas in game por jugar.
                        <br /><br />

                        <span className='definicionesTyC'>2.2.</span> <br /> <br />
                            Sitio: hace referencia al sitio web o aplicación móvil a la que se puede acceder mediante la URL: https://www.cryptocupqatar.io/
                        <br /><br />

                        <span className='definicionesTyC'>2.3.</span> <br /> <br />
                            Visitante: Cualquier persona que accede al sitio o aplicaciones administradas por Crypto Cup.
                        <br /><br />

                        <span className='definicionesTyC'>2.4.</span> <br /> <br />
                            Usuario: Cualquier Visitante del Sitio que haya adquirido un token que le permita el acceso a las funcionalidades del Sitio.
                        <br /><br />

                        <span className='definicionesTyC'>2.5.</span> <br /> <br />
                            Token: Hace referencia a tokens criptográficos utilizados por Crypto Cup para representar activos digitales que permiten al Usuario realizar diversas funciones en el Sitio.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='condicionesDeUso'>
                        III. CONDICIONES DE USO
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>3.1.</span> <br /> <br />
                            Para poder ingresar en el Sitio los Visitantes y Usuarios deben ser mayores de 18 años de edad y contar con capacidad jurídica y de ejercicio pleno según la ley de su lugar de domicilio. Toda persona que sea menor de 18 años, o tenga alguna restricción dispuesta por autoridad competente para contratar no podrá acceder al Sitio.
                        <br /><br />

                        <span className='definicionesTyC'>3.2.</span> <br /> <br />
                        No podrán participar en el juego las personas que -según las leyes nacionales que les resultaren aplicables- tuvieran una prohibición legal para hacerlo. En particular quedan excluidos de participar aquellos deportistas que intervengan como jugadores en la copa del mundo de la FIFA 2022, árbitros, integrantes del cuerpo técnico, o toda aquella persona que en forma directa o indirecta pudiera tener influencia por su participación en los resultados de los partidos.
                        <br /><br />
                        <strong>
                            El Sitio se encuentra dirigido y limitado en cuanto a su utilización a aquellas jurisdicciones nacionales donde no se requieren licencias de juego online o donde no se interpreten las funcionalidades del presente juego como una “Apuesta”. Por consiguiente, quedan excluidas las siguientes jurisdicciones: Argentina, Uruguay, Estados Unidos de América, Suiza…
                            La enumeración resulta meramente enunciativa, siendo responsabilidad del Usuario averiguar si en el estado de domicilio o desde donde pretende ingresar al Sitio se encuentra restringida la participación en este tipo de juegos.
                        </strong>
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='accesoAlJuego'>
                        IV. ACCESO AL JUEGO
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>4.1.</span> <br /> <br />
                            Crypto Cup utiliza tokens criptográficos que permiten el acceso a funcionalidades del sistema (Utility tokens). 
                            Existirá una versión libre del juego a la cual el Usuario no deberá acceder mediante la adquisición del Token. Esta opción se entenderá como muestra y Crypto Cup podrá disponer a su exclusivo criterio que se otorguen recompensas por su utilización o no. Asimismo, la recompensa podrá ser variable o aleatoria.
                            Existirá una versión full del juego a la cual el Usuario podrá acceder adquiriendo Tickets NFT de ingreso. Se trata de boletos que otorgan acceso a las experiencias actuales construidas sobre la plataforma de Crypto Cup Qatar. 
                        <br /><br />

                        <span className='definicionesTyC'>4.2.</span> <br /> <br />
                            El Usuario podrá participar en sectores (Ladder) distintos del juego dependiendo el ticket adquirido. En cualquiera de los sectores podrá jugar y obtener una recompensa en tokens propios del sitio de acuerdo a su desempeño, dependiendo la recompensa de la Ladder en la que haya ingresado. 
                            Podrá ingresar en la “Basic Ladder”,  debiendo tener un "Basic Ladder Ticket" para acceder. Por otro lado en la “Boost Ladder”, debiendo contar con un "Boost Ladder Ticket" para acceder. 
                            Los Usuarios podrán participar en ambas Ladder al mismo tiempo, pero para ello deberán contar por el Ticket correspondiente a cada una.
                        <br /><br />


                        <span className='definicionesTyC'>4.3.</span> <br /> <br />
                            La adquisición de los Ticket se podrá efectuar mediante el Sitio cuando se habilite el acceso al público general, o en forma directa mediante la preventa que Crypto Cup realice para Usuarios seleccionados
                        <br /><br />
                        <br /><br />
                    </p>
                </div>



                <div className="titlePrivacy">
                    <h2 id='custodiaDeContraseña'>
                    V. CUSTODIA DE CONTRASEÑA
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>5.1.</span> <br /> <br />
                            El acceso al Sitio para participar del juego se efectuará mediante la utilización del token que represente el "Basic Ladder Ticket" o el "Boost Ladder Ticket", el cual será validado por el sistema mediante la utilización del plugin de MetaMask u otro similar que Crypto Cup disponga.
                            El Usuario será el único responsable por la custodia de las credenciales que le den acceso a sus tokens. En este sentido, será el único responsable por el resguardo de su clave privada, no teniendo Crypto Cup ningún acceso a la misma, ni pudiendo permitir accesos a la plataforma en caso de pérdida por el Usuario de sus tokens.
                            El Usuario declara expresamente que conoce que las transacciones con criptoactivos por medio de internet resultan altamente riesgosas, que las operaciones no pueden retrotraerse y que los activos digitales carecen de respaldo subyacente en bienes. Asimismo, que existen riesgos concretos de hackeos a todo Sitio de internet y a la blockchain, sin perjuicio de lo cual Crypto Cup realizará sus mejores esfuerzos para tratar de evitarlos, no asumiendo responsabilidad por el actuar ilegal de terceros por quien no tiene obligación legal de responder.
                            El Usuario asume expresamente todo riesgo relativo a la pérdida de sus claves de acceso que le impidan ingresar al Sitio o acceder a la billetera virtual en donde se le acrediten los premios que otorgue Crypto Cup.

                        <br /><br />

                        <span className='definicionesTyC'>5.2.</span> <br /> <br />
                            El acceso del Usuario a la Ladder se efectúa acreditando que es titular del ticket correspondiente. Para ello, se utiliza el plugin de MetaMask o el que Crypto Cup determine, el cual permite identificar que el usuario es poseedor del token.
                            Crypto Cup no será responsable por los daños que pudieran ocasionarse a raíz de la pérdida o sustracción de la contraseña privadas o la imposibilidad de acceder el Usuario a sus propios tokens. 
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='conductasProhibidas'>
                        VI. CONDUCTAS PROHIBIDAS
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>6.1.</span> <br /> <br />
                        El Usuario no utilizará el Sitio para participar en los siguientes actos, o cualquier otro acto que pueda ser categorizado como tal: <br /><br />

                        <span className='definicionesTyC'>I.</span> <br /> <br />
                            Actos que violen leyes y reglamentos aplicables, políticas públicas o los Términos y Condiciones.odo riesgo relativo a la pérdida de sus claves de acceso que le impidan ingresar al Sitio o acceder a la billetera virtual en donde se le acrediten los premios que otorgue Crypto Cup.
                        <br /><br />

                        <span className='definicionesTyC'>II.</span> <br /> <br />
                            Actos delictivos, conducta que conduce a actos delictivos o conducta que promueve tales actos.
                        <br /><br />
                    
                        <span className='definicionesTyC'>III.</span> <br /> <br />
                            Ofrecer servicios o productos que requieren autorizaciones públicas o legales sin contar con los mismos.
                        <br /><br />

                        <span className='definicionesTyC'>IV.</span> <br /> <br />
                            Recopilar sistemáticamente información relativa a los Usuarios o al Sitio sin consentimiento expreso por parte de Crypto Cup.
                        <br /><br />

                        <span className='definicionesTyC'>V.</span> <br /> <br />
                            Utilizar mecanismos automatizados para interactuar con la plataforma, ya sea a partir de scripts, software para data mining, software extractivo de datos, para ejecutar funciones específicas dentro del Sitio y/o para enviar mensajes o cualquier otro tipo de interacción en el Sitio.
                        <br /><br />

                        <span className='definicionesTyC'>VI.</span> <br /> <br />
                            Utilizar la Plataforma para publicitar bienes y/o servicios no autorizados por Crypto Cup.
                        <br /><br />

                        <span className='definicionesTyC'>VII.</span> <br /> <br />
                            Publicar información que sea dañina para los niños, niñas o adolescentes.
                        <br /><br />

                        <span className='definicionesTyC'>VIII.</span> <br /> <br />
                            Publicar contenido que difame, injurie o insulte a un tercero, o contenido que dañe la reputación o credibilidad de un tercero.
                        <br /><br />

                        <span className='definicionesTyC'>IX.</span> <br /> <br />
                            Publicar expresiones que conduzcan a la discriminación, ya sea por motivos de raza, etnia, género, credo, condición social, lugar de residencia, características físicas, historial médico, educación, u otro;
                        <br /><br />

                        <span className='definicionesTyC'>X.</span> <br /> <br />
                            Infringir los derechos de propiedad intelectual de Crypto Cup o de un tercero;
                        <br /><br />

                        <span className='definicionesTyC'>XI.</span> <br /> <br />
                            Llevar adelante esfuerzos de ingeniería inversa del software utilizado en el Sitio;
                        <br /><br />

                        <span className='definicionesTyC'>XII.</span> <br /> <br />
                            Coordinar con otros Usuarios estrategias maliciosas para obtener beneficios en el Sitio.
                        <br /><br />

                        <span className='definicionesTyC'>XIII.</span> <br /> <br />
                            Cualquier otra conducta que Crypto Cup determine inadecuada para la comunidad de Usuarios.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>



                <div className="titlePrivacy">
                    <h2 id='advertenciasYsuspensionProvisoria'>
                        VII.  ADVERTENCIAS Y SUSPENSIÓN PROVISORIA
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>7.1.</span> <br /> <br />
                        <strong>
                            Crypto Cup podrá a su exclusivo criterio, en caso de advertir que se ha infringido alguna de las conductas prohibidas, disponer en forma previa a bloquear el acceso al Usuario al Sitio, dispone una advertencia o suspensión provisoria.
                        </strong>
                        <br /><br />

                        <span className='definicionesTyC'>7.2.</span> <br /> <br />
                            Lo ante expuesto es una facultad de Crypto Cup, quien podrá en todo momento disponer en forma directa el bloqueo definitivo del acceso al Usuario cuando a su criterio la magnitud de la falta así lo amerite.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>


                <div className="titlePrivacy">
                    <h2 id='bloqueoDeAcceso'>
                        VIII. BLOQUEO DE ACCESO
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>8.1.</span> <br /> <br />

                            <strong>
                            Crypto Cup podrá bloquear el acceso a un Usuario cuando advierta que:
                            </strong>
                            <br /><br />

                            <span className='definicionesTyC'>I.</span> <br /> <br />
                                La cuenta registra una actividad sospechosa, que hace suponer que el Usuario puede estar violando las conductas prohibidas.
                            <br /><br />

                            <span className='definicionesTyC'>II.</span> <br /> <br />
                                El Usuario utiliza vocabulario ofensivo, injuriante, o que de cualquier manera pudiera afectar a la comunidad de Usuarios, conforme a lo estipulado en el apartado de Conductas Prohibidas de los presentes Términos y Condiciones.
                            <br /><br />
                        
                            <span className='definicionesTyC'>III.</span> <br /> <br />
                                El Usuario utilice la cuenta para planificar o llevar adelante conductas que infrinjan los derechos de Crypto Cup.
                            <br /><br />

                            <span className='definicionesTyC'>IV.</span> <br /> <br />
                                Se registra actividad que hace suponer que el Usuario titular del ticket fue anteriormente bloqueado para acceder por Crypto Cup, conforme lo establecen los presentes Términos y Condiciones.
                            <br /><br />

                            <span className='definicionesTyC'>V.</span> <br /> <br />
                                Cuando a criterio de Crypto Cup se hayan violado las conductas prohibidas o se advierta que el Usuario estuviera actuando de mala fe para perjudicar a terceros.
                            <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='billeteraDelUsuario'>
                        IX. BILLETERA DEL USUARIO
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>9.1.</span> <br /> <br />
                            Toda adquisición de Tokens por el Usuario desde el Sitio se llevará a cabo mediante la Dapp (Decentralized Applications) a la que se ingresa por https://www.cryptocupqatar.io/dapp además del website https://www.cryptocupqatar.io. La Dapp está relacionada a una wallet criptográfica que mediante smart contract se ejecuta sobre la blockhain.
                            Cada Usuario tendrá asociada una cuenta (la cual será solo identificada por la clave pública de su billetera virtual de ingreso) y una billetera virtual de propiedad exclusiva de Crypto Cup, en donde se recibirán los pagos que el Usuario efectúe desde su propia billetera virtual. 
                            Se deja aclarado que Crypto Cup no tiene la capacidad de revertir ninguna transacción que el usuario haya efectuado mediante la utilización de contratos inteligentes. Es posible que la red Binance Smart Chain perciba una tarifa por cada transacción que el Usuario realice, así como pueden ser aplicadas comisiones por la utilización de los contratos inteligentes de la red. El Usuario reconoce y acepta las tarifas y comisiones que Binance Smart Chain aplique las cuales estarán a su cargo.
                        <br /><br />

                        <span className='definicionesTyC'>9.2.</span> <br /> <br />

                            <span className='definicionesTyC'>TOKENS.</span> <br /> <br />
                                Crypto Cup utiliza dos tipos de tokens criptográficos para representar activos virtuales cuyas características y funcionalidades son diferentes. 
                                En ambos casos nos encontramos frente a tokens de utilidad, cuya función radica en permitir al Usuario acceder y jugar en la plataforma. <br /> <br />
                                    Basic (ERC-721) que les dará acceso a los jugadores al Basic Ladder, <br />
                                    Boost (ERC-721) que permite que los jugadores participen del Boost Ladder. <br /> <br />

                                Son tokens que representan un activo virtual único e irrepetible (tokens no fungibles). 
                                Cada uno de los tokens emitidos representará en el Sitio un Ticket único e irrepetible. La titularidad del NFT otorga al Usuario derecho a ingresar en sectores (Ladder) distintos del juego dependiendo el ticket adquirido (ver punto IV). <br />
                                Asimismo, el titular del NFT tendrá derecho a que, de acuerdo a las reglas particulares de cada uno de los juegos del Sitio, se le recompense con una cantidad determinada de tokens, la cual será determinada por Crypto Cup. <br />
                                Los NFT podrán ser transferidos por el Usuario mediante la Dapp a terceros una vez que Crypto Cup habilite dicha opción. En este caso, el Usuario asume exclusiva responsabilidad por la transacción, careciendo Crypto Cup de toda intervención en la operación.
                                El Usuario reconoce que los NFTs representan activos digitales en la Binance Smart Chain, y que no se encuentran respaldados por bienes físicos. 
                                
                                Crypto Cup podrá crear otros NFTs distintos a los Tickets los cuales podrán representar obras de arte digitales, tales como trofeos u otros artículos. Estos NFTs no tendrán derechos subyacentes y sólo implicarán un reconocimiento a la participación en el juego.
                            <br /><br />
                        <br /><br />
                    </p>
                </div>


                <div className="titlePrivacy">
                    <h2 id='politicaDeProteccionDeDatos'>
                        X. POLÍTICA DE PROTECCIÓN DE DATOS
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>10.1.</span> <br /> <br />
                            Este sitio utiliza y protege los datos proporcionados por los Usuarios conforme ley vigente y estándares de buenas prácticas internacionales en protección de datos. Crypto Cup  se compromete con la seguridad de los datos de los Usuarios, guardando la debida reserva y confidencialidad. Esta Política de Privacidad puede cambiar con el tiempo o ser actualizada. <br /> <br />

                            Los siguientes tipos de datos (en adelante, “datos recolectados”) pueden ser almacenados y procesados por el sistema: <br /><br />

                            <span className='definicionesTyC'>I.</span> <br /> <br />
                            Datos que fuesen necesarios para generar una cuenta personal en el sitio.
                            <br /><br />

                            <span className='definicionesTyC'>II.</span> <br /> <br />
                                Datos sobre su ordenador, incluyendo dirección IP y ubicación geográfica.
                            <br /><br />
                        
                            <span className='definicionesTyC'>III.</span> <br /> <br />
                                Datos sobre sus visitas y uso del sistema.
                            <br /><br />

                            <span className='definicionesTyC'>IV.</span> <br /> <br />
                                Datos que introduzca para suscribirse a nuestros correos y boletines, como nombre y correo electrónico. 
                            <br /><br />

                            <span className='definicionesTyC'>V.</span> <br /> <br />
                                Datos que se generen mientras navega en nuestro sitio web.
                            <br /><br />

                            <span className='definicionesTyC'>VI.</span> <br /> <br />
                                Nombre de Usuario, Nickname, edad, género, área de residencia, dirección de correo electrónico.
                            <br /><br />

                            <span className='definicionesTyC'>VII.</span> <br /> <br />
                                Número de billetera electrónica del Usuario.
                            <br /><br />

                            Crypto Cup tomará todas las precauciones razonables técnicas y organizacionales existentes a los fines de evitar la pérdida, mal uso o alteración de su información personal. De todas maneras, el Usuario reconoce que la transmisión de datos en internet es inherentemente insegura y que no se puede garantizar absolutamente la seguridad de los mismos. <br /> <br />

                            En caso de solicitarlo, el Usuario recibirá toda la información recolectada y almacenada por Crypto Cup . Dicha solicitud deberá ser acompañada de prueba suficiente de identidad. Para mayor información sobre el alcance de lo referido, o al proceso descrito, deberá contactarse al siguiente correo electrónico: cryptocup2022@gmail.com, Utilizando el asunto: ‘Datos personales’. 
                        <br /><br />


                        <span className='definicionesTyC'>10.2.</span> <br /> <br />
                            Los datos recolectados podrán ser utilizada con alguno o todos los fines que se describen a continuación:<br />
                            <br />

                            <span className='definicionesTyC'>I.</span> <br /> <br />
                                Administrar el sistema, incluyendo la puesta a disposición de estos datos a nuestros dependientes, oficiales, proveedores, entre otros, como sea razonable y necesario según lo estipulado en estos términos y condiciones.
                            <br /><br />

                            <span className='definicionesTyC'>II.</span> <br /> <br />
                                Mejorar la oferta de servicios.
                            <br /><br />
                        
                            <span className='definicionesTyC'>III.</span> <br /> <br />
                                Enviar comunicación publicitaria, notificaciones, o cualquier otro tipo de información.
                            <br /><br />

                            <span className='definicionesTyC'>IV.</span> <br /> <br />
                                Enviar sugerencias para mejorar las funcionalidades del producto (que podrán ser, dependiendo el caso, sugerencias sin cargo, o con cargo).
                            <br /><br />

                            <span className='definicionesTyC'>V.</span> <br /> <br />
                                Suministrar información estadística a terceros sobre nuestros Usuarios habiendo primeramente disociado correctamente la información personal.
                            <br /><br />

                            <span className='definicionesTyC'>VI.</span> <br /> <br />
                                Verificar el cumplimiento de estos términos y condiciones.
                            <br /><br />

                            <span className='definicionesTyC'>VII.</span> <br /> <br />
                                Otros usos no previstos por esta enunciación.
                            <br /><br />

                            En caso de mediar solicitud judicial competente o en ocasión de una situación que lo justifique, podremos divulgar sus datos personales hasta lo requerido por la ley. Esto incluye supuestos donde dicha publicación se realice a los fines de custodiar y ejercer los derechos de Crypto Cup . <br /> <br />

                            Los datos recolectados, almacenados y procesados para cualquiera de los fines mencionados, serán eliminados luego de transcurrido como máximo 2 años desde que el Usuario ha cancelado su suscripción al sistema.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='propiedadIntelectual'>
                        XI. PROPIEDAD INTELECTUAL
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>11.1.</span> <br /> <br />
                        <strong>
                            MINTZ SOCIEDAD ANÓNIMA es titular de todos los derechos de propiedad intelectual en relación a Crypto Cup, incluyendo nombre de dominio, plataforma web, app móvil, software en versión código fuente y objeto, las compilaciones de datos, y cualquier otro desarrollo que pudiera surgir en el futuro.
                        </strong>
                        <br /><br />

                        <span className='definicionesTyC'>11.2.</span> <br /> <br />
                            MINTZ SOCIEDAD ANÓNIMA autoriza la reproducción por cualquier medio digital o analógico del Contenido Crypto Cup, siempre que dicha reproducción se limite a expresar opiniones de los Usuarios en relación a la plataforma. <br /> <br />
                            Esta licencia será revocable automáticamente si por cualquier razón se publica contenido ilegal, inmoral, humillante, que afecte la moral, buenas costumbres, o que de cualquier manera pudiera afectar derechos de Crypto Cup o de terceras personas.
                            Crypto Cup no garantiza la verosimilitud o credibilidad de ningún contenido o información puesta a disposición del público por los Usuarios, ni sostiene necesariamente las opiniones expresadas por éstos. <br /> <br />
                            Salvo consentimiento expreso de Crypto Cup, el Usuario no podrá, directa ni indirectamente, utilizar la marca Crypto Cup en conexión con ningún servicio o evento, ya sea este online u offline, oneroso o gratuito, que no sean los específicamente comunicados y ofrecidos desde la plataformas y/o perfiles oficiales en redes sociales de Crypto Cup. 

                        <br /><br />

                        <span className='definicionesTyC'>11.3.</span> <br /> <br />
                            <strong>
                                LICENCIA DE USO DE CONTENIDOS GENERADOS POR LOS USUARIOS
                            </strong> <br /> <br />

                                El Usuario le cede por este medio a Crypto Cup, una licencia gratuita, perpetua e irrevocable para reproducir el contenido compartido por el Usuario en redes sociales y/o en cualquier medio cuando dicho contenido incorpore o reproduzca alguno de los contenidos Crypto Cup. Asimismo, otorga igual licencia respecto de los comentarios efectuados en el Sitio.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='aspectosImpositivos'>
                        XII. ASPECTOS IMPOSITIVOS
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>12.1.</span> <br /> <br />
                            Los Usuarios serán los únicos responsables del estricto cumplimiento de las obligaciones fiscales que surjan a partir del contrato celebrado entre ellos. En tanto Crypto Cup no es parte de la relación contractual, no se responsabiliza por el efectivo cumplimiento de las obligaciones fiscales o impositivas establecidas por la ley vigente que afecten a los Usuarios.
                        <br /><br />

                        <span className='definicionesTyC'>12.2.</span> <br /> <br />
                            El Usuario asumirá en su totalidad los tributos que pudieran gravar la adquisición de los tokens, el acceso al Sitio, la percepción de los premios o todo otro hecho imponible que se genere por la utilización del Sitio.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>


                <div className="titlePrivacy">
                    <h2 id='prohibicionDeCesion'>
                        XIII. PROHIBICIÓN DE CESIÓN
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>13.1.</span> <br /> <br />
                            La cuenta de cada usuario es personal, única e intransferible. No podrá ceder sus derechos y obligaciones sin el previo consentimiento escrito de Crypto Cup. 
                        <br /><br />

                        <span className='definicionesTyC'>13.2.</span> <br /> <br />
                            Crypto Cup podrá ceder, transferir, delegar o disponer de los derechos u obligaciones derivados de la presente vinculación (incluyendo su posición contractual), total o parcialmente, sin necesidad de requerir autorización por los Usuarios.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='notificaciones'>
                        XIV. NOTIFICACIONES
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>14.1.</span> <br /> <br />
                        Crypto Cup podrá realizar las notificaciones al Usuario a través de una notificación general en el sitio web, a través de mensajes de texto, y a la dirección de correo electrónico facilitada por el Usuario. El Usuario podrá comunicarse con Crypto Cup mediante el envío de un correo electrónico a la dirección: Cryptocup2022@gmail.com. 
                        <br /><br />
                        <br /><br />
                    </p>
                </div>


                <div className="titlePrivacy">
                    <h2 id='indemnizacion'>
                        XV. INDEMNIZACIÓN
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>15.1.</span> <br /> <br />
                            El Usuario expresamente asume el deber de dejar indemne a Crypto Cup, sus directivos, asociadas, subsidiarias, empleados y accionistas frente a cualquier reclamo que estos deban hacer frente vinculados con la violación por parte del Usuario de derechos de terceros, violación de derechos de propiedad intelectual, violación de las reglas de conducta impuestas en los Terminos y Condiciones.
                        <br /><br />

                        <span className='definicionesTyC'>15.2.</span> <br /> <br />
                            El Usuario deberá reembolsar cualquier gasto que Crypto Cup o las demás personas enunciadas hubieran incurrido en concepto de indemnizaciones, costos, costas, gastos de abogados, tasas judiciales, peritos, traductores, tasas administrativas, costos de escribano, o cualquier otro costo relacionado.
                        <br /><br />

                        <span className='definicionesTyC'>15.3.</span> <br /> <br />
                            Asimismo, deberá indemnizar por cualquier daño producido a la plataforma con culpa grave o dolo, incluyendo la reparación por daño efectivo, lucros cesantes, pérdida de chances, y todo otro rubro indemnizatorio que pudiera corresponder.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='ineficaciaDeLasClausulas'>
                        XVI.  INEFICACIA DE LAS CLÁUSULAS
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>16.1.</span> <br /> <br />
                            Si cualquiera de las cláusulas de estos Términos y Condiciones fuera declarada ineficaz por un tribunal competente, ello no afectará al resto de las cláusulas que resulten independientes.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='documentacionContractual'>
                        XVII. DOCUMENTACIÓN CONTRACTUAL
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>17.1.</span> <br /> <br />
                            Las partes acuerdan otorgar pleno valor contractual a los documentos electrónicos que consten en el Sitio, los cuales serán plenamente válidos para probar las transacciones efectuadas, así como todo lo relativo al vínculo entre Crypto Cup y el Usuario.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>

                <div className="titlePrivacy">
                    <h2 id='juridiccionYleyAplicable'>
                        XVIII. JURISDICCIÓN Y LEY APLICABLE
                    </h2>
                </div>
                <div className="textPrivacy">
                    <p>
                        <span className='definicionesTyC'>18.1.</span> <br /> <br />
                            Para la resolución de todo reclamo o conflicto el Usuario deberá primero intentar la resolución amigable con Crypto Cup. A dichos fines, deberá remitir su reclamo por escrito al correo electrónico cryptocup2022@gmail.com, indicando: su reclamo en forma detallada y lo pretendido en términos positivos, nombre y apellido completo, tipo y número de documento, dirección exacta de residencia, teléfono y correo electrónico. Crypto Cup tendrá 30 días para analizar el reclamo y brindar una respuesta al Usuario.
                        <br /><br />

                        <span className='definicionesTyC'>18.2.</span> <br /> <br />
                            Si fracasara la resolución amigable del reclamo o conflicto, las partes acuerdan que serán competentes para entender en la instancia judicial los tribunales ordinarios con competencia en la Ciudad Autónoma de Buenos Aires, Argentina, con renuncia a cualquier otro fuero o jurisdicción que pudiera corresponder, excepto en aquellos casos que la ley prohíba la prórroga de jurisdicción.
                        <br /><br />
                        <br /><br />
                    </p>
                </div>
                <h4>CRYPTO CUP IS IN NO WAY ASSOCIATED TO FIFA OR ANY OF THEIR BRANDS</h4>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy