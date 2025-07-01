import { useParams, useSearchParams } from "react-router-dom";
import styles from "./CafeDetails.module.css";
import StarRating from "./StarRating";

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
					<div className={styles.ratingBlock}>
						<div className={styles.ratingHolder}>
							<div>{/* <StarRating /> */}</div>

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
					</div>
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
			</div>
		</main>
	);
}
