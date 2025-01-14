import { ModeToggle } from "../mode-toggle-toggle"

const items = [
	{
		display: "Home",
		url: "/",
	},
	{
		display: "Chairs",
		url: "/shop/chairs",
	},
	{
		display: "Tables",
		url: "/shop/Tables",
	},
]

const userLinks = [
	{
		display: "Cart",
		url: "/cart",
		icon: "",
	},
	{
		display: "Account",
		url: "/account",
		icon: "",
	},
]
const Header = () => {
	return (
		<nav className="flex justify-around my-5">
			{items.map((item) => (
				<a key={item.url} href={item.url}>
					{item.display}
				</a>
			))}
			<div>
				{userLinks.map((userLink) => (
					<a key={userLink.url} href={userLink.url}>
						{" "}
						{userLink.display}
					</a>
				))}
			</div>
			<ModeToggle />
		</nav>
	)
}

export default Header
