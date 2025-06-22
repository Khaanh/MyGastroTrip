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
			<div className={styles.wrapper}>
				<div className={styles.intro}>
					<div className={styles.desc}>
						<p>{desc}</p>
					</div>
					<div className={styles.ratingHolder}>
						<div className={styles.rating}>
							<div>{/* <StarRating /> */}</div>
							<ul>
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
						</div>
					</div>
				</div>
				<div>
					<h2>Contacts:</h2>
					<ul>
						<li>
							<a href={`tel:${phone}`}>{phone}</a>
						</li>
						<li>
							<a href={`${geo}`}>{address}</a>
						</li>
						<li>Working hours:</li>
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
