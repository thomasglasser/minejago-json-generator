import { useLocale } from '../contexts/index.js'
import { Octicon } from './index.js'

interface Props {
	donate?: boolean,
}
export function Footer({ donate }: Props) {
	const { locale } = useLocale()

	return <div>
		<footer>
			<h3>
				This website has been modified specifically for the Minejago mod.<br />
				please do NOT report problems to the original author!
			</h3>
		</footer>
		<footer>
			<p>
				<span>{locale('developed_by')} <a href="https://github.com/misode" target="_blank" rel="noreferrer">Misode</a></span>
			</p>
			{donate !== false && <p class="donate">
				{Octicon.heart}
				<a href="https://ko-fi.com/misode" target="_blank" rel="noreferrer">{locale('donate')}</a>
			</p>}
			<p>
				{Octicon.mark_github}
				<span>{locale('source_code_on')} <a href="https://github.com/misode/misode.github.io" target="_blank" rel="noreferrer">{locale('github')}</a></span>
			</p>
		</footer>
		<footer>
			<p>
				<span>{locale('modified_by')} <a href="https://github.com/thomasglasser" target="_blank" rel="noreferrer">Thomas Glasser</a></span>
			</p>
			{donate !== false && <p class="donate">
				{Octicon.heart}
				<a href="https://www.buymeacoffee.com/ThomasGlasser" target="_blank" rel="noreferrer">{locale('donate')}</a>
			</p>}
			<p>
				{Octicon.mark_github}
				<span>{locale('source_code_on')} <a href="https://github.com/thomasglasser/minejago-json-generator" target="_blank" rel="noreferrer">{locale('github')}</a></span>
			</p>
		</footer>
	</div>
}
