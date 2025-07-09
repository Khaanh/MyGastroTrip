import { useParams, useSearchParams } from "react-router-dom";
import styles from "./CafeDetails.module.css";
// import StarRating from "./StarRating";
import AsideRating from "./AsideRating";

export default function CafeDetails() {
	const { id } = useParams();
	const [searchParam, setSearchParam] = useSearchParams();
	const title = searchParam.get("title");
	const desc = searchParam.get("desc");
	const phone = searchParam.get("phone");
	const geo = searchParam.get("geo");
	const address = searchParam.get("address");
	const location = searchParam.get("location");

	return (
		<main>
			<h1 className={styles.title}>{title}</h1>
			{/* 
			<ul className={styles.contactList}>
				<li className={styles.contactItem}>
					<a className={styles.contactLink} href={`tel:${phone}`}>
						{phone}
					</a>
				</li>
				<li className={styles.contactItem}>
					<a className={styles.contactLink} href={`${geo}`}>
						{address}
					</a>
				</li>
				<li className={styles.contactItem}>Working hours:</li>
			</ul> */}
			<div className={styles.wrapper}>
				<div className={styles.intro}>
					<div className={styles.desc}>
						<p>{desc}</p>
					</div>

					<AsideRating />
					{/* <aside className={styles.ratingBlock}>
						<div className={styles.ratingHolder}>

							<button className={styles.ratingBtnToggle}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill={"#fcc419"}
									stroke={"#fcc419"}
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							</button>

							<ul className={styles.ratingList}>
								<li>
									<span>Design</span>
									<StarRating />
								</li>
								<li>
									<span>Services</span>
									<StarRating />
								</li>
								<li>
									<span>Food</span>
									<StarRating />
								</li>
								<li>
									<span>Would You go back?</span>
									<StarRating />
								</li>
							</ul>

							<div>
								Average: <span>3.5 </span>
							</div>
						</div>
					</aside> */}
				</div>
				<div className={styles.contactBlock}>
					{/* <h2 className={styles.contactTitle}>Contacts:</h2> */}
					<ul className={styles.contactList}>
						<li className={styles.contactItem}>
							<a className={styles.contactLink} href={`tel:${phone}`}>
								{phone}
							</a>
						</li>
						<li className={styles.contactItem}>
							<a target="_blank" className={styles.contactLink} href={`${geo}`}>
								{address}
							</a>
						</li>
						<li className={styles.contactItem}>Working hours:</li>
					</ul>
				</div>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
				perspiciatis aliquam at ipsam illum qui eius non itaque? Quo accusamus,
				voluptate velit labore facere nam autem reiciendis earum odit nemo
				obcaecati id officia sit quam illum? Quo natus laborum eius tempora
				harum voluptatibus incidunt vitae pariatur excepturi impedit? Quia
				dolore repudiandae iste beatae explicabo. Consectetur, odit possimus.
				Dolorem eius asperiores tempore, fugiat necessitatibus neque quisquam
				dolorum, soluta culpa iure minima natus ea? Qui, officiis provident? Nam
				rem eos eius? Cupiditate natus, dignissimos explicabo inventore
				exercitationem autem libero ipsum veniam voluptate aliquam dicta nam
				dolorem eveniet voluptatem nihil? Qui voluptas repudiandae voluptatum
				alias beatae officia, consequuntur, asperiores commodi excepturi cumque
				numquam animi sunt repellat sit delectus dolore pariatur. Animi
				doloremque doloribus commodi aut eius, nam aspernatur obcaecati quae sed
				laudantium alias exercitationem et ex veniam omnis pariatur amet,
				voluptas non eveniet consequatur nemo. Ducimus, eos velit illum pariatur
				deserunt ipsum soluta nostrum ratione iure! Quisquam porro facilis
				doloribus consectetur dicta inventore, magnam labore, hic magni saepe
				laboriosam dignissimos et ipsa nobis fugit, dolor laudantium cupiditate
				nemo? Possimus quos rem, ducimus fuga dolorum vero repellendus laborum
				ipsa nulla autem accusamus veniam libero quod quo aliquam, consectetur
				unde. Porro consequuntur non vero ratione culpa aut fuga animi sequi
				adipisci modi harum eum nam doloribus, deleniti corrupti id numquam
				vitae explicabo facilis enim tenetur fugit? Neque, ea aspernatur aut
				animi ex ipsa cumque. Ipsam voluptas in quis nobis earum laborum, porro
				repellendus eos odit illo saepe at rem quos quibusdam sunt ipsum
				accusamus veniam modi perferendis fugit maiores aspernatur obcaecati
				illum magni? Neque molestiae fuga labore porro pariatur aliquam
				consectetur eveniet doloremque tempora, officiis minima exercitationem?
				Officia veritatis recusandae ut labore? Repellat a, sunt delectus rerum
				obcaecati doloribus tenetur cum at doloremque ad architecto id laborum
				sapiente cumque, eaque fugit accusantium quod inventore voluptates.
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
				nobis libero provident quam eos, non omnis expedita inventore ipsa
				corrupti excepturi, esse dignissimos! Doloremque repudiandae facere,
				itaque, debitis dolorum dolorem ab illo inventore voluptas laborum, sit
				nostrum facilis alias vitae eius enim soluta quam fugiat sapiente
				cumque. Incidunt quisquam magnam maxime expedita! Voluptatum dolor
				numquam asperiores? Consectetur dignissimos maiores tempora vero, sunt
				deserunt non nemo, natus molestiae doloribus saepe excepturi minus, ex
				nesciunt sed cupiditate soluta doloremque obcaecati? Ad facilis, eaque
				possimus reprehenderit, provident nihil animi perferendis minima at,
				quidem itaque. In quasi unde iure amet quae animi ab nesciunt ullam
				corrupti, officiis dolore atque velit repellendus nisi, deserunt,
				dignissimos quas doloremque rerum? Officia tenetur suscipit nisi ullam
				ratione quaerat obcaecati quam incidunt earum ea autem, iure dignissimos
				fuga sequi exercitationem possimus magnam vel! Minima consequuntur
				fugiat officia animi quod? Dolorum, hic dicta libero molestias aliquid,
				possimus, praesentium recusandae tenetur qui quisquam consequuntur quasi
				magni exercitationem corrupti odio quaerat illum corporis mollitia nisi
				nam illo at cumque minus odit! Quos dolor iste quae libero iure
				inventore. Voluptatem, quae ut explicabo molestiae asperiores voluptates
				animi eaque vero, totam minima amet? Molestiae sit quibusdam tempora
				officia officiis soluta quae, consequuntur, repellendus illum corporis
				doloribus deleniti eligendi natus porro veniam obcaecati non expedita
				alias blanditiis facere earum commodi adipisci odit nostrum. Officia
				sunt recusandae perferendis dolore ut suscipit quas culpa dolores nobis
				voluptatibus vitae, deleniti dolor aperiam doloremque voluptas odit illo
				temporibus nostrum. Hic placeat ex distinctio in aperiam obcaecati
				inventore repudiandae eligendi dolore necessitatibus nesciunt vel, esse,
				voluptate libero quisquam quaerat sit repellat maxime! Ut et nobis
				accusantium ipsam architecto quidem officia commodi quasi ullam,
				inventore asperiores a, sed minima libero illo laborum similique aliquid
				distinctio doloribus labore autem magnam necessitatibus molestias? Quis
				magni, minima consequuntur ex nemo ipsa tenetur rem est modi iusto.
				Minus, quis pariatur, odio nostrum porro animi eligendi alias odit qui,
				sed dolorem ab ex sapiente corporis expedita repellendus dolor.
				Recusandae tempora, quae blanditiis placeat nemo nisi numquam? Facilis
				minima eius placeat magnam quisquam autem reiciendis animi, doloribus
				veniam consequuntur enim nostrum necessitatibus recusandae impedit nobis
				harum expedita fugit neque, accusamus dolores exercitationem beatae!
				Voluptate vero earum obcaecati atque, eum placeat fugit pariatur. Totam
				odit dolore modi! Laborum molestias voluptate voluptatem asperiores?
				Veniam esse ad numquam vitae, deserunt dolor officiis molestias earum
				libero ut corrupti incidunt magnam hic quibusdam commodi eius ipsum,
				maiores consequuntur distinctio nam officia, rerum corporis recusandae.
				Odit accusamus sed optio atque recusandae veniam quam! Ut eius possimus
				laudantium iure vitae alias consectetur voluptatum aperiam ratione cum
				animi, et vero similique iusto quod. Natus ipsum tempora deserunt
				quaerat amet. Ut, quam minus vitae laborum ullam earum, praesentium
				doloribus rem cupiditate nobis alias magnam nesciunt! Minima quia
				delectus unde tempore et? Modi laboriosam molestiae ipsam consequatur
				numquam ipsa, sunt cupiditate odio quia, temporibus facere maiores unde
				hic ab assumenda. Animi id incidunt perspiciatis nobis reprehenderit
				reiciendis officiis repellendus velit suscipit quasi sequi delectus
				dolor illo aperiam natus doloremque et rem neque, cumque aspernatur?
				Sunt, obcaecati laudantium. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Incidunt excepturi aspernatur facilis voluptates ea
				non, reiciendis laborum laudantium minus explicabo veniam, iure quod rem
				possimus in, facere ex nulla perferendis! Aliquam aliquid quasi ullam.
				Odit nobis officiis neque, ullam ipsum nesciunt. Quis aliquam expedita,
				numquam aperiam, quibusdam iste ut eum aut ea, nam doloribus. Dolorum
				vero ipsa odio omnis nesciunt et eligendi rerum. Beatae sit aliquam,
				ullam cumque earum voluptas accusantium error eligendi facilis accusamus
				veniam repudiandae aut delectus. Numquam quas pariatur autem rem,
				nesciunt recusandae vel itaque odio nulla vitae similique natus nihil
				atque minus perspiciatis sapiente. Ipsam fuga iure aut alias
				consequatur, mollitia facere atque obcaecati labore distinctio sit
				impedit odit voluptatibus iusto, molestiae explicabo beatae molestias
				voluptatum culpa maiores quia. Facilis voluptatum fuga officia
				laboriosam, culpa sit alias libero porro, eum nobis at saepe aspernatur
				eos impedit, architecto expedita ad consequuntur? Magni, fuga eos
				accusantium repellendus mollitia aliquam iure quae minus odio expedita
				rem laboriosam corporis dolores debitis? Pariatur facere adipisci fuga,
				nam dolore fugiat, ab iure commodi natus necessitatibus voluptatum
				corporis debitis, excepturi eaque! Laboriosam rem nam ut soluta, dolore
				provident molestias quos quis omnis fugiat repellendus placeat! A fuga
				voluptatem voluptas sequi iusto officiis maiores quis ea itaque sed odio
				expedita maxime voluptatibus quas totam vero quasi beatae sint, placeat
				est sapiente laborum repudiandae? Adipisci ipsum architecto omnis qui
				esse maxime eligendi reprehenderit quidem? Unde odio a ratione provident
				perspiciatis atque, ea deserunt? Blanditiis dolorum maxime molestias.
				Explicabo dolorem assumenda quasi deserunt necessitatibus beatae quae
				dignissimos harum quod odio fugiat, quaerat voluptatem eius illum
				doloremque nulla porro? Nemo blanditiis laboriosam pariatur officia id
				veritatis amet at sed facilis sit illum corporis dignissimos vero enim,
				placeat repudiandae in hic unde quos fuga autem eos provident nobis ab.
				Illum quasi repellat molestias omnis quisquam? Dolorem omnis labore
				quasi dolor, molestias eligendi at quis. Vel aspernatur corrupti fugit
				facilis cupiditate cum sed corporis, perspiciatis labore eius officia
				repellendus sit odit accusamus totam, aut quod voluptatum vitae et at
				aperiam praesentium amet consequatur. Animi labore, obcaecati optio ab
				odit, repellendus possimus libero eveniet, mollitia nostrum similique
				accusantium? Mollitia eaque magnam voluptatem explicabo aspernatur culpa
				tenetur, facere iusto reiciendis id suscipit ducimus, voluptates dolorem
				nulla, adipisci quaerat nisi vitae ipsum accusantium laboriosam!
				Voluptate, molestiae? Sapiente illum iure, ex recusandae dolore cumque.
				Ratione ex quisquam cumque odio ipsa consequatur maxime illum neque
				laboriosam voluptates minus doloribus, expedita eius dolores aut
				repellendus. At quaerat maxime provident cumque eius necessitatibus
				voluptatum officiis earum? Nisi ipsam dignissimos hic. Obcaecati, saepe
				dolore ipsam suscipit, aspernatur excepturi deserunt nisi neque quae,
				minima quia maiores debitis quisquam a est ut! Exercitationem, accusamus
				delectus, tempora vitae, sunt eveniet officia earum ex architecto ab
				amet. Possimus deserunt iste harum voluptatem beatae praesentium odio
				nam, ratione esse soluta odit reiciendis earum, provident minima
				repellat a consequuntur aperiam doloribus dolore dolorem autem sint
				quidem asperiores. In unde non, harum eveniet alias perspiciatis,
				facilis dicta hic corporis commodi accusamus blanditiis suscipit quos?
				Ducimus, magni distinctio. Ducimus eum, nostrum dolor corrupti officiis
				ipsum explicabo libero nemo recusandae tenetur at rem sit animi
				necessitatibus quo quos quam modi molestiae iure, nihil eligendi.
				Cupiditate modi repellat corrupti repudiandae tempore enim commodi
				possimus magnam. Qui, error sint assumenda nostrum officia amet! Porro
				deleniti accusamus quasi iste sint maiores eaque ut consectetur pariatur
				molestiae esse necessitatibus sequi dolore perspiciatis et, quibusdam
				asperiores? Ratione veritatis commodi voluptas. Ex doloremque quis
				dolore nisi facere accusamus voluptates velit ipsum, natus omnis
				doloribus recusandae quia deleniti porro accusantium dolorem
				perspiciatis vitae, consequuntur, enim voluptatem mollitia nesciunt
				architecto. Omnis similique minima voluptatibus accusamus sit commodi
				nihil hic veniam aut cumque, assumenda amet aperiam facilis expedita
				earum dignissimos vero mollitia. Temporibus in animi beatae laborum
				dolor impedit vero quas, laudantium at sapiente neque cupiditate hic
				excepturi odit similique, sequi debitis, error consectetur dolorem quod
				natus consequuntur deleniti harum perspiciatis. Odit harum similique
				repellendus sequi quo saepe amet. Accusamus voluptate aut molestias,
				dolor consequatur inventore impedit, optio sint perspiciatis quia
				consectetur quaerat quidem ex sit quisquam veniam suscipit quibusdam
				eligendi recusandae, ea molestiae officia quod atque iste? Quo autem ab
				laborum ad, quibusdam blanditiis sequi mollitia temporibus. Ipsa
				reprehenderit voluptatum possimus recusandae eveniet rem impedit
				deleniti modi doloribus dolorem, doloremque veniam, beatae, quo ratione.
				Nesciunt tempora cumque reprehenderit itaque, aspernatur quae quibusdam
				consequatur temporibus eveniet magni neque, odio dolorum at vel officiis
				vitae, cupiditate dolor. Nisi ipsum consequuntur error eos, impedit ad
				deleniti dicta minima praesentium doloremque cupiditate eligendi
				sapiente quia totam! Repellendus error, corrupti ducimus assumenda
				labore quae non voluptate numquam tempore, earum iusto nesciunt adipisci
				aut unde expedita omnis tempora voluptates illum incidunt! Ex saepe
				veniam quos incidunt cumque adipisci praesentium quidem culpa
				consectetur consequatur, quo doloremque quas labore hic architecto
				perspiciatis nam nostrum veritatis blanditiis dolores pariatur dolorem
				amet. Nobis numquam omnis culpa sunt blanditiis quaerat non illo facere
				fugiat, qui nihil asperiores quidem vero minima ipsa? Harum quasi
				voluptatibus ipsa labore, impedit sunt rem ipsum sed perferendis amet ad
				laborum nulla numquam adipisci obcaecati officia quia, nobis itaque
				quisquam autem consequatur aperiam eaque mollitia. Sequi dolore porro
				quaerat ullam assumenda, accusantium perspiciatis magnam, atque quo,
				expedita molestiae ea libero doloribus aut? Saepe commodi sit iste
				recusandae assumenda dolorum tenetur? Earum ipsa totam laudantium,
				officiis delectus dolore vero voluptatem et qui rem iure magni sunt esse
				nemo aliquam tempore eum repellat laborum cupiditate temporibus
				consequuntur. Reiciendis facilis reprehenderit ullam natus provident
				voluptate aliquam facere, quo perferendis nostrum iure nisi distinctio?
				Fugit perspiciatis aut rerum repellat recusandae. Asperiores tenetur
				molestias saepe! Incidunt repellat totam, magnam dignissimos id dolorum
				neque voluptas autem ullam dicta est nobis aliquam. Numquam velit ut
				tempore nisi quia autem iste itaque doloremque? Ad fugiat fugit
				reprehenderit neque sunt animi iste quo sit porro quibusdam modi qui a
				nulla, nesciunt iure voluptas sequi id laboriosam! Temporibus earum
				sequi eos pariatur aspernatur omnis? Debitis magni odit dolorem ipsum
				molestiae fugiat tenetur doloremque repellat deleniti similique, enim
				sint nesciunt libero hic, quaerat quis vero, rerum tempore dolorum eos
				unde et sed assumenda molestias. Quam, reiciendis tenetur expedita eos
				officia beatae odio!
			</div>
		</main>
	);
}
