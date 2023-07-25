import avatar1 from "../assets/images/avatars/avatar1.png";
import avatar2 from "../assets/images/avatars/avatar2.png";
import nft1 from "../assets/images/nfts/nft1.png";
import nft2 from "../assets/images/nfts/nft2.png";
import nft3 from "../assets/images/nfts/nft3.png";
import Picture from "../components/common/Picture";
import ContainedButton from "../components/common/buttons/ContainedButton";

export default function Cta() {
    return (
        <section
            aria-label="Call to Action section"
            className="bg-neutral-100"
        >
            <div className="container tablet:px-10 laptop:px-20 | py-24">
                <div className="flex max-tablet:flex-col items-center gap-12">

                    <div className="basis-3/5 | mobile-lg:grid mobile-lg:grid-cols-2 mobile-lg:gap-12 max-mobile-lg:flex max-mobile-lg:gap-8 max-mobile-lg:overflow-x-scroll max-mobile-lg:snap-x max-mobile-lg:snap-mandatory | side-scrollbar-hide">
                        {
                            [
                                {
                                    img: nft1,
                                    avatar: avatar1,
                                    extraClasses: 'mobile-lg:max-w-[300px] mobile-lg:max-h-[300px] mobile-lg:aspect-square mobile-lg:justify-self-end'
                                },
                                {
                                    img: nft2,
                                    avatar: avatar2,
                                    extraClasses: 'mobile-lg:max-w-[240px] mobile-lg:max-h-[265px] mobile-lg:aspect-[0.91/1] mobile-lg:row-span-2 mobile-lg:self-center'
                                },
                                {
                                    img: nft3,
                                    avatar: avatar2,
                                    extraClasses: 'mobile-lg:max-w-[200px] mobile-lg:max-h-[220px] mobile-lg:aspect-[0.91/1] mobile-lg:justify-self-end'
                                },
                            ].map(({ img, avatar, extraClasses }, index) =>
                                <div key={index} className={`relative shrink-0 | w-8/12 h-60 mobile-lg:w-auto mobile-lg:h-auto | max-mobile-lg:snap-start max-mobile-lg:snap-always ${extraClasses}`}>
                                    <Picture
                                        src={img}
                                        alt="nft picture"
                                        extraClasses="rounded-xl cursor-pointer"
                                    />
                                    <div className="w-12 h-12 mobile-lg:w-20 mobile-lg:h-20 | absolute max-mobile-lg:top-2 max-mobile-lg:right-2 mobile-lg:-bottom-6 mobile-lg:-right-6">
                                        <Picture
                                            src={avatar}
                                            alt="nft owner"
                                            extraClasses=""
                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="space-y-8 basis-2/5">
                        <h2 className="text-800 text-neutral-900 font-bold font-['Integral_CF',_sans-serif] leading-tight max-w-xs">
                            Create and sell your NFTs
                        </h2>

                        <p className="text-neutral-600 text-500 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
                        </p>

                        <ContainedButton
                            type="button"
                            extraClasses="px-10 py-5 font-medium text-600 leading-tight"
                        >
                            Sign Up Now
                        </ContainedButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
