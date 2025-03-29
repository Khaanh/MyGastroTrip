import styles from "./CafeList.module.css";
import main from "./Main.module.css";

export default function CafeList() {
	return (
		<div>
			<ul className={styles.List}>
				<li className={styles.Item}>
					<a href="#" className={styles.Link}>
						<div className={styles.Img}>
							<img src="/img/Kaffeemanufaktur.jpg" alt="" />
						</div>
						<div className={styles.Descr}>
							<h2 className={styles.Title}>Kaffeemanufaktur</h2>
							<p className={styles.Intro}>
								description Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Rerum cupiditate, enim consequuntur aperiam ad inventore
								repudiandae non recusandae expedita, eveniet magnam modi iste
								quam vitae totam qui reprehenderit repellendus optio?
							</p>
						</div>
					</a>
				</li>
				<li className={styles.Item}>
					<a href="#" className={styles.Link}>
						<div className={styles.Img}>
							<img src="/img/mvsm-01.jpg" alt="" />
						</div>
						<div className={styles.Descr}>
							<h2 className={styles.Title}>Man vs Machine</h2>
							<p className={styles.Intro}>
								description Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Rerum cupiditate, enim consequuntur aperiam ad inventore
								repudiandae non recusandae expedita, eveniet magnam modi iste
								quam vitae totam qui reprehenderit repellendus optio?
							</p>
						</div>
					</a>
				</li>
				<li className={styles.Item}>
					<a href="#" className={styles.Link}>
						<div className={styles.Img}>
							<img src="/img/romiani-02.jpg" alt="" />
						</div>
						<div className={styles.Descr}>
							<h2 className={styles.Title}>Romiani</h2>
							<p className={styles.Intro}>
								description Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Rerum cupiditate, enim consequuntur aperiam ad inventore
								repudiandae non recusandae expedita, eveniet magnam modi iste
								quam vitae totam qui reprehenderit repellendus optio?
							</p>
						</div>
					</a>
				</li>
				<li className={styles.Item}>
					<a href="#" className={styles.Link}>
						<div className={styles.Img}>
							<img src="/img/maisonkarl.jpg" alt="" />
						</div>
						<div className={styles.Descr}>
							<h2 className={styles.Title}>Maison Karl</h2>
							<p className={styles.Intro}>
								description Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Rerum cupiditate, enim consequuntur aperiam ad inventore
								repudiandae non recusandae expedita, eveniet magnam modi iste
								quam vitae totam qui reprehenderit repellendus optio?
							</p>
						</div>
					</a>
				</li>
				<li className={styles.Item}>
					<a href="#" className={styles.Link}>
						<div className={styles.Img}>
							<img src="/img/pizzaHut.jpg" alt="" />
						</div>
						<div className={styles.Descr}>
							<h2 className={styles.Title}>PizzaHut</h2>
							<p className={styles.Intro}>
								description Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Rerum cupiditate, enim consequuntur aperiam ad inventore
								repudiandae non recusandae expedita, eveniet magnam modi iste
								quam vitae totam qui reprehenderit repellendus optio?
							</p>
						</div>
					</a>
				</li>
				<li className={styles.Item}>
					<a href="#" className={styles.Link}>
						<div className={styles.Img}>
							<img src="/img/PrufrockCoffee.jpg" alt="" />
						</div>
						<div className={styles.Descr}>
							<h2 className={styles.Title}>PrufrockCoffee</h2>
							<p className={styles.Intro}>
								description Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Rerum cupiditate, enim consequuntur aperiam ad inventore
								repudiandae non recusandae expedita, eveniet magnam modi iste
								quam vitae totam qui reprehenderit repellendus optio?
							</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	);
}
