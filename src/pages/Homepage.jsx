import { useEffect, useState } from "react";
import CafeList from "../components/CafeList";
import CityList from "../components/CityList";
import PageNav from "../components/PageNav";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import ModalDialog from "../components/ModalDialog";

export default function Homepage() {
	const [selectedCity, setSelectedCity] = useState();

	const [modalDefaultIsOpen, setModalDefaultIsOpen] = useState(false);

	const handleModalDefaultClose = () => {
		setModalDefaultIsOpen((curState) => !curState);
	};

	useEffect(() => {
		modalDefaultIsOpen
			? document.body.classList.add("fixed")
			: document.body.classList.remove("fixed");
	}, [modalDefaultIsOpen]);

	const handleSelect = (location) => {
		setSelectedCity(location);
	};

	return (
		<div>
			<PageNav />
			<main className={styles.main}>
				<button className={styles.btnCTA}>
					<Link to="app">Want to add a new spot ?</Link>
				</button>

				<button onClick={() => handleModalDefaultClose(modalDefaultIsOpen)}>
					Open Modal
				</button>
			</main>
			<ModalDialog
				isOpen={modalDefaultIsOpen}
				onClose={handleModalDefaultClose}
			>
				<h1>Lorem, ipsum dolor.</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
					debitis amet nam, soluta delectus aperiam hic, quae nobis rem culpa
					qui quaerat. Porro magnam placeat dolores vitae officiis modi
					voluptatem.
				</p>
			</ModalDialog>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nulla,
			repellendus similique harum, quia obcaecati deleniti quos consequuntur
			debitis consequatur accusamus ut cumque voluptates officiis repellat
			nesciunt ab beatae. Error eius sit consequuntur. Commodi esse impedit
			deserunt nobis similique iure, inventore, libero in illo asperiores
			aliquam placeat rerum officia omnis excepturi eligendi, ut earum autem
			nostrum harum qui natus sapiente necessitatibus voluptatem. A suscipit
			quae consequatur maxime dolores ipsa, velit tempore iste laborum. Deleniti
			dolorum sed in fuga exercitationem accusantium, labore quibusdam,
			doloremque iste, ducimus unde consectetur ipsa esse et dolore ipsum
			distinctio asperiores? Quos id voluptate reiciendis maiores aliquid
			libero, officia adipisci temporibus unde, et possimus obcaecati voluptatem
			amet soluta deleniti iste quisquam. Sunt iure eveniet commodi autem dolore
			velit ratione voluptas sequi sapiente, necessitatibus similique assumenda
			blanditiis magnam tempore iste ipsa laborum doloribus id quo recusandae.
			Doloremque ratione at eaque facilis id numquam ipsa obcaecati officiis. At
			ea quo debitis! Impedit numquam vero, enim nostrum officia rerum incidunt
			perspiciatis, totam, laudantium hic ipsa culpa harum? Minima voluptate
			sunt deleniti assumenda reprehenderit eligendi nostrum optio ut, labore
			rem totam doloremque officiis explicabo cum dolore corrupti veritatis
			culpa velit nam excepturi est vel. Quibusdam rem minima hic dignissimos
			velit, fugit maiores debitis, inventore illo beatae nostrum qui
			consequuntur! Illo libero, esse aliquid fugiat repudiandae quam quibusdam
			delectus cumque nesciunt quo animi omnis aliquam tenetur iusto aut nulla
			illum, recusandae veniam natus culpa rem laboriosam! Dolore sint
			architecto veniam nihil, odit et veritatis cumque eum sed quam minus
			beatae? Quidem unde in iusto quos omnis voluptatum optio minima quo. In
			iste et recusandae, nostrum delectus architecto harum error ipsam quas
			atque voluptatum sed nulla nemo vero sint voluptatem fugiat blanditiis!
			Harum ea assumenda voluptatem voluptas, nulla nihil a odio odit doloribus
			quae perferendis, itaque consequuntur eum dolore omnis? Minima maxime
			deserunt nihil animi saepe quis veritatis perspiciatis, laborum eligendi
			dolor id et minus quae repellendus aliquam, labore odit est similique
			culpa doloremque? Assumenda praesentium accusantium, nesciunt molestias
			ipsam voluptates autem temporibus eos repudiandae laudantium ut deleniti
			harum magni aliquid. Voluptatem pariatur praesentium necessitatibus quia
			eos omnis veritatis provident quibusdam obcaecati magnam fuga a harum
			temporibus voluptatibus minus accusantium ratione culpa odit voluptate
			incidunt, vitae reiciendis? Error obcaecati, cupiditate nam ea rerum,
			maiores temporibus optio similique vel numquam quasi itaque nostrum
			veritatis minus magnam, fuga excepturi et in odit saepe iure placeat
			incidunt consequatur. Officiis a molestias voluptatibus sunt veniam
			inventore, est esse facilis natus sequi! Officia illo neque enim natus
			sunt consequuntur minus ratione amet excepturi accusamus assumenda magnam
			inventore deserunt cupiditate, alias vel corrupti quisquam dolores. Rerum,
			accusamus modi. Et eos dolore laborum eveniet a distinctio non ducimus
			odio, aliquam exercitationem libero rem perferendis quam voluptatibus,
			quasi consequatur maiores. Sapiente tempore corrupti magni voluptas ad
			quis expedita optio saepe nam, nobis tempora dolorum ratione! Magnam
			inventore rerum nesciunt saepe dignissimos, repudiandae aspernatur commodi
			expedita, natus voluptas sint numquam ratione asperiores error esse?
			Soluta culpa ratione ullam, ad, nam nulla odio placeat dignissimos,
			repellendus nihil dolorem optio accusamus. Voluptatem, odio corrupti?
			Incidunt delectus commodi impedit animi libero placeat ipsa maiores a
			itaque recusandae provident maxime qui dolore, culpa vitae eos, optio
			aliquid autem similique reiciendis asperiores exercitationem amet? Atque,
			perspiciatis? Dignissimos, nam cum eum dolorem explicabo eaque sint
			maiores nulla ipsum. Dolores, recusandae labore eum tenetur voluptates
			corporis voluptatem nesciunt, velit corrupti cupiditate, dolore reiciendis
			nostrum. Molestias cupiditate, pariatur repellendus unde sequi consectetur
			saepe commodi distinctio at consequuntur labore itaque tenetur, laboriosam
			odit reprehenderit minima nobis beatae deleniti perspiciatis totam quis
			vero explicabo? Atque ullam ducimus optio cupiditate quis quas excepturi
			ex minima recusandae. Eum, eius necessitatibus eveniet fuga corrupti
			accusamus consequuntur culpa eaque inventore magni modi sint libero a
			commodi adipisci nihil natus harum nobis blanditiis mollitia, atque
			perferendis. Quaerat nam consequuntur facilis. Amet impedit reprehenderit
			veritatis repudiandae eius nemo neque error vero optio voluptatem!
			Blanditiis accusantium cum quaerat itaque officiis hic laudantium nulla
			quia, amet quos aliquid, ipsum sint illum nesciunt magni! Placeat delectus
			quidem, non esse veritatis velit adipisci tempora. Accusantium, odio esse
			id, fugiat vel porro perspiciatis temporibus excepturi unde fuga
			recusandae iusto exercitationem a consequatur debitis inventore officia
			enim. Praesentium error optio delectus, rerum excepturi distinctio iste
			quo molestias possimus saepe eligendi repellat quos fuga? Molestias animi
			molestiae temporibus autem incidunt perspiciatis eveniet quos, aperiam
			facilis aliquid consequuntur possimus debitis nobis, tempora saepe sunt
			magni nisi, praesentium repellendus recusandae enim quidem modi eum. Modi
			quibusdam quod nulla reiciendis tenetur libero dicta. Porro iure quidem
			dicta natus nihil dolorem sunt itaque facilis repellat quaerat ad
			perspiciatis, tempora non doloremque doloribus suscipit laudantium
			mollitia rem voluptas consectetur voluptates. Provident veritatis quo
			deserunt quam veniam hic quia illum beatae, quod mollitia dicta sit
			suscipit autem unde laborum maiores voluptas magnam, temporibus architecto
			et eveniet vero? Praesentium accusantium quam velit nesciunt voluptatum
			est eum unde ducimus. Non repudiandae quia saepe aliquid error ipsa
			reiciendis accusantium, inventore eius itaque tenetur dolor perferendis
			beatae natus ipsum, ea, amet vitae perspiciatis illo quisquam? Deleniti
			eos eum minus voluptas similique incidunt autem ipsa dicta explicabo
			tempora veritatis earum ex atque recusandae placeat tenetur, aliquid ab
			ducimus itaque aspernatur. Dignissimos libero recusandae dolor et nesciunt
			minus tenetur unde? Veniam quisquam inventore alias est obcaecati saepe
			nesciunt, commodi voluptatum quo quasi sunt, corrupti aliquam debitis qui
			officia voluptatem accusantium? Nemo laborum nisi sapiente ducimus dolorum
			quo necessitatibus quasi quos odio pariatur, quam obcaecati, ipsa
			veritatis doloribus, fuga eveniet neque dignissimos? Minus earum deleniti
			ullam exercitationem quam sed ducimus similique debitis placeat alias,
			porro sit libero ratione eligendi dolorum molestiae harum atque iure iste
			repudiandae error quisquam vel. Cupiditate accusamus neque tenetur
			voluptas dolorum, consectetur, nesciunt minus deleniti esse commodi iure
			eaque error delectus veniam doloribus architecto harum aut laudantium.
			Delectus vel asperiores quibusdam laboriosam voluptatum eveniet vero vitae
			consectetur sed nobis alias nulla, rem voluptatem dolorem debitis ratione
			autem quaerat voluptate cupiditate laborum facere dolorum eum magnam.
			Architecto delectus aspernatur consectetur aliquid corporis ad eos fugit
			alias aperiam maxime iste aut eius earum quod, adipisci, sapiente et
			eligendi magnam doloremque velit corrupti saepe exercitationem ipsa
			dignissimos?
		</div>
	);
}
