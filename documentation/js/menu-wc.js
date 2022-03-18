'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">learning lantern Auth-api</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9aba387d868d2c2061cb5f15f96ba525c7693c43d485a475b2f28f6c23c2fa5816efd60e3e9a995c899623b0de3969f993345d1c55b139fb14de2934fe505f62"' : 'data-target="#xs-components-links-module-AppModule-9aba387d868d2c2061cb5f15f96ba525c7693c43d485a475b2f28f6c23c2fa5816efd60e3e9a995c899623b0de3969f993345d1c55b139fb14de2934fe505f62"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9aba387d868d2c2061cb5f15f96ba525c7693c43d485a475b2f28f6c23c2fa5816efd60e3e9a995c899623b0de3969f993345d1c55b139fb14de2934fe505f62"' :
                                            'id="xs-components-links-module-AppModule-9aba387d868d2c2061cb5f15f96ba525c7693c43d485a475b2f28f6c23c2fa5816efd60e3e9a995c899623b0de3969f993345d1c55b139fb14de2934fe505f62"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RefreshComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClassListModule.html" data-type="entity-link" >ClassListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClassListModule-494f839e622a0da78fcfb95162b26c16d689937e90a858e060f5ec672b345315793082c194886cd1e0157f95b323c72d7b2bdc3f5f21e1f37863ae7816e7e801"' : 'data-target="#xs-components-links-module-ClassListModule-494f839e622a0da78fcfb95162b26c16d689937e90a858e060f5ec672b345315793082c194886cd1e0157f95b323c72d7b2bdc3f5f21e1f37863ae7816e7e801"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClassListModule-494f839e622a0da78fcfb95162b26c16d689937e90a858e060f5ec672b345315793082c194886cd1e0157f95b323c72d7b2bdc3f5f21e1f37863ae7816e7e801"' :
                                            'id="xs-components-links-module-ClassListModule-494f839e622a0da78fcfb95162b26c16d689937e90a858e060f5ec672b345315793082c194886cd1e0157f95b323c72d7b2bdc3f5f21e1f37863ae7816e7e801"' }>
                                            <li class="link">
                                                <a href="components/CalenderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalenderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClassHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClassListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClassSideNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClassSideNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyCoursesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyCoursesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoCompletedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoCompletedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoImportantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoImportantComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoMydayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoMydayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoSidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoSidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoTasksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoTasksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClassListModule-494f839e622a0da78fcfb95162b26c16d689937e90a858e060f5ec672b345315793082c194886cd1e0157f95b323c72d7b2bdc3f5f21e1f37863ae7816e7e801"' : 'data-target="#xs-injectables-links-module-ClassListModule-494f839e622a0da78fcfb95162b26c16d689937e90a858e060f5ec672b345315793082c194886cd1e0157f95b323c72d7b2bdc3f5f21e1f37863ae7816e7e801"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClassListModule-494f839e622a0da78fcfb95162b26c16d689937e90a858e060f5ec672b345315793082c194886cd1e0157f95b323c72d7b2bdc3f5f21e1f37863ae7816e7e801"' :
                                        'id="xs-injectables-links-module-ClassListModule-494f839e622a0da78fcfb95162b26c16d689937e90a858e060f5ec672b345315793082c194886cd1e0157f95b323c72d7b2bdc3f5f21e1f37863ae7816e7e801"' }>
                                        <li class="link">
                                            <a href="injectables/showDetailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >showDetailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClassListRoutingModule.html" data-type="entity-link" >ClassListRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnglishModule.html" data-type="entity-link" >EnglishModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EnglishModule-4c4811f9424b1da728519d7484bb623cb3797cea872fe7eca6a2639fd75c33431b0f0d32354a1a13eca8a7d69291b0dc35b78736f30d2e0d340f576a8eb61808"' : 'data-target="#xs-components-links-module-EnglishModule-4c4811f9424b1da728519d7484bb623cb3797cea872fe7eca6a2639fd75c33431b0f0d32354a1a13eca8a7d69291b0dc35b78736f30d2e0d340f576a8eb61808"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EnglishModule-4c4811f9424b1da728519d7484bb623cb3797cea872fe7eca6a2639fd75c33431b0f0d32354a1a13eca8a7d69291b0dc35b78736f30d2e0d340f576a8eb61808"' :
                                            'id="xs-components-links-module-EnglishModule-4c4811f9424b1da728519d7484bb623cb3797cea872fe7eca6a2639fd75c33431b0f0d32354a1a13eca8a7d69291b0dc35b78736f30d2e0d340f576a8eb61808"' }>
                                            <li class="link">
                                                <a href="components/AuthContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailValidationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailValidationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EnglishComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnglishComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidationRedirectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationRedirectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnglishRoutingModule.html" data-type="entity-link" >EnglishRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ServiceModule.html" data-type="entity-link" >ServiceModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServiceModule-f903b5fd2ea0cf0dfc74781941db40ee530d5a14b9ef25868af936894d6e7a3896c6bb198aabb36183a0292e51438b2ee431ad5d3467d03047d809c931dbd3f7"' : 'data-target="#xs-injectables-links-module-ServiceModule-f903b5fd2ea0cf0dfc74781941db40ee530d5a14b9ef25868af936894d6e7a3896c6bb198aabb36183a0292e51438b2ee431ad5d3467d03047d809c931dbd3f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServiceModule-f903b5fd2ea0cf0dfc74781941db40ee530d5a14b9ef25868af936894d6e7a3896c6bb198aabb36183a0292e51438b2ee431ad5d3467d03047d809c931dbd3f7"' :
                                        'id="xs-injectables-links-module-ServiceModule-f903b5fd2ea0cf0dfc74781941db40ee530d5a14b9ef25868af936894d6e7a3896c6bb198aabb36183a0292e51438b2ee431ad5d3467d03047d809c931dbd3f7"' }>
                                        <li class="link">
                                            <a href="injectables/HttpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HttpService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ServiceItemI.html" data-type="entity-link" >ServiceItemI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TodoTask.html" data-type="entity-link" >TodoTask</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});